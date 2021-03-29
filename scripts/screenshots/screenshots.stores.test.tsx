import {
  getBaseUrl,
  getPathScreenshot,
  getStyleTagContentSafeArea,
} from './utils';

const {
  JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
  JEST_PLAYWRIGHT_SCREENSHOT_SEARCH_QUERY,
} = process.env;

describe('App Screenshots', () => {
  const styleContentSafeArea = getStyleTagContentSafeArea(deviceName as string);
  it('home', async () => {
    await page.goto(`${getBaseUrl()}/home`, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: styleContentSafeArea,
    });
    await page.screenshot({
      path: getPathScreenshot(
        JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
        deviceName,
        'home',
      ),
    });
  });

  it('chapters', async () => {
    await page.goto(`${getBaseUrl()}/home`, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: styleContentSafeArea,
    });
    await page.click(
      '//html/body/div/ion-app/ion-split-pane/ion-router-outlet/div/ion-header/ion-toolbar/ion-buttons/ion-menu-button',
    );
    await page.waitForSelector('#main.menu-content-open');
    await page.screenshot({
      path: getPathScreenshot(
        JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
        deviceName,
        'chapters',
      ),
    });
  });

  it(`illustrations`, async () => {
    await page.goto(`${getBaseUrl()}/chapter/02/01`, {
      waitUntil: 'networkidle',
    });
    await page.addStyleTag({
      content: styleContentSafeArea,
    });
    await page.screenshot({
      path: getPathScreenshot(
        JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
        deviceName,
        `illustrations`,
      ),
    });
  });

  it('search', async () => {
    await page.goto(
      `${getBaseUrl()}/search?q=${JEST_PLAYWRIGHT_SCREENSHOT_SEARCH_QUERY}`,
      { waitUntil: 'networkidle' },
    );
    await page.addStyleTag({
      content: styleContentSafeArea,
    });
    await page.waitForSelector('ion-card.hydrated');
    await page.screenshot({
      path: getPathScreenshot(
        JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
        deviceName,
        'search',
      ),
    });
  });

  it('accessibility', async () => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto(`${getBaseUrl()}/settings`, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: styleContentSafeArea,
    });
    await page.screenshot({
      path: getPathScreenshot(
        JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
        deviceName,
        'accessibility',
      ),
    });
    await page.emulateMedia({ colorScheme: 'no-preference' });
  });

  it('about', async () => {
    await page.goto(`${getBaseUrl()}/about`, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: styleContentSafeArea,
    });
    await page.screenshot({
      path: getPathScreenshot(
        JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
        deviceName,
        'about-mmh',
      ),
    });
  });
});

export {};
