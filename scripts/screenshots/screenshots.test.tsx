import { getBaseUrl, getPathScreenshot } from './utils';

const {
  JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
  JEST_PLAYWRIGHT_SCREENSHOT_SEARCH_QUERY,
} = process.env;

describe('App Screenshots', () => {
  it('/home', async () => {
    await page.goto(`${getBaseUrl()}/home`, { waitUntil: 'networkidle' });
    await page.screenshot({
      path: getPathScreenshot(
        JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
        deviceName,
        'home',
      ),
    });
  });

  it('/search', async () => {
    await page.goto(
      `${getBaseUrl()}/search?q=${JEST_PLAYWRIGHT_SCREENSHOT_SEARCH_QUERY}`,
      { waitUntil: 'networkidle' },
    );
    await page.waitForSelector('ion-card.hydrated');
    await page.screenshot({
      path: getPathScreenshot(
        JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
        deviceName,
        'search',
      ),
    });
  });

  const CHAPTERS = ['01', '02'];
  for (let i = 0; i < CHAPTERS.length; i++) {
    it(`/chapter/${CHAPTERS[i]}/01`, async () => {
      await page.goto(`${getBaseUrl()}/chapter/${CHAPTERS[i]}/01`, {
        waitUntil: 'networkidle',
      });
      await page.screenshot({
        path: getPathScreenshot(
          JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
          deviceName,
          `chapter-${CHAPTERS[i]}-01`,
        ),
      });
    });
  }
});

export {};
