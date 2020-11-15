const chalk = require('chalk');
const fs = require('fs');
const ora = require('ora');
const { webkit, devices } = require('playwright');

// Target directory in which the screenshots are saved.
// Please note that the target directory will be deleted and created again before each run
const TARGET_DIR = './resources/screenshots';

// Actual List of Devices
// https://github.com/Microsoft/playwright/blob/master/src/deviceDescriptors.ts
const DEVICES = ['Pixel 2', 'Nexus 10', 'iPhone 11 Pro', 'iPad Pro 11'].map(
  (item) => {
    return { ...devices[item], name: item.replace(' ', '-') };
  },
);

// Which languages should be processed.
const LANGUAGES = ['en-US', 'de-DE'];

const BASE_URL = 'https://github.com/';
const PAGES = ['home', 'features', 'about'];
// const BASE_URL = 'http://localhost:8100/';
// const PAGES = ['home', 'settings', 'about'];

const addDeviceBars = async (page) => {
  await page.addScriptTag({
    url:
      'https://unpkg.com/device-bars@1.1.0/dist/device-bars/device-bars.esm.js',
    type: 'module',
  });

  await page.addScriptTag({
    content: `
  var body = document.body;
  var statusbar = document.createElement('device-status-bar');
  var navigationbar = document.createElement('device-navigation-bar');
  
  document.body.insertBefore(statusbar, body.firstElementChild)
  document.body.insertBefore(navigationbar, body.lastElementChild)
  `,
  });

  await page.waitForSelector('device-status-bar.hydrated');
  await page.waitForSelector('device-navigation-bar.hydrated');
};

(async () => {
  const spinner = ora('Prepare Target Directory').start();
  try {
    await fs.promises.rmdir(TARGET_DIR, { recursive: true });
    spinner.succeed(`Prepare Target Directory ${chalk.yellow(TARGET_DIR)}`);

    const browser = await webkit.launch();

    for (const DEVICE of DEVICES) {
      for (const LANGUAGE of LANGUAGES) {
        const context = await browser.newContext({
          ...DEVICE,
          bypassCSP: true, // bypassing page's Content-Security-Policy
          locale: `${LANGUAGE}`,
        });

        const contextPage = await context.newPage({});

        // Create target directory for screenshots
        const directoryPath = `${TARGET_DIR}/${DEVICE.name}/${LANGUAGE}`;
        await fs.promises.mkdir(directoryPath, { recursive: true });

        for (let i = 0; i < PAGES.length; i++) {
          spinner.start(
            `Create Screenshot ${chalk.green(DEVICE.name)} ${chalk.yellow(
              LANGUAGE,
            )} ${chalk.blue(PAGES.slice(0, i + 1).join(' '))}`,
          );

          await contextPage.goto(`${BASE_URL}${PAGES[i]}`);
          await addDeviceBars(contextPage);
          await contextPage.screenshot({
            path: `${directoryPath}/screenshot-${i}${
              PAGES[i] ? '-' + PAGES[i] : ''
            }.png`,
          });
        }
        spinner.succeed();
      }
    }
    await browser.close();
    spinner.stop();
  } catch (error) {
    spinner.fail();
  }
  process.exit();
})();
