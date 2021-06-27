import { DeviceFixtures } from './playwright.config';
import {
  getBaseUrl,
  getPathScreenshot,
  getStyleTagContentSafeArea,
} from './utils';
import { test as base, expect } from '@playwright/test';

const test = base.extend<
  { baseUrl: string; searchQuery: string } & DeviceFixtures
>({
  baseUrl: getBaseUrl(),
  searchQuery: process.env.PLAYWRIGHT_TEST_SCREENSHOT_SEARCH_QUERY,
});

test.describe('screenshots', () => {
  test('home', async ({
    baseUrl,
    deviceName,
    locale,
    page,
    platform,
    safeArea,
  }, { title }) => {
    await page.goto(`${baseUrl}/home`, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: getStyleTagContentSafeArea(safeArea),
    });
    await page.waitForSelector('#root > ion-app.hydrated');
    await page.screenshot({
      path: getPathScreenshot(platform, locale, deviceName, title),
    });

    expect.anything();
  });

  test('chapters', async ({
    baseUrl,
    deviceName,
    locale,
    page,
    platform,
    safeArea,
  }, { title }) => {
    await page.goto(`${baseUrl}/home`, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: getStyleTagContentSafeArea(safeArea),
    });
    await page.click('ion-buttons > ion-menu-button');
    await page.waitForSelector('#main.menu-content-open');
    await page.screenshot({
      path: getPathScreenshot(platform, locale, deviceName, title),
    });
    expect.anything();
  });

  test(`illustrations`, async ({
    baseUrl,
    deviceName,
    locale,
    page,
    platform,
    safeArea,
  }, { title }) => {
    await page.goto(`${baseUrl}/chapter/02/01`, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: getStyleTagContentSafeArea(safeArea),
    });
    await page.waitForSelector('#root > ion-app.hydrated');
    await page.screenshot({
      path: getPathScreenshot(platform, locale, deviceName, title),
    });
    expect.anything();
  });

  test(`search`, async ({
    baseUrl,
    deviceName,
    locale,
    page,
    platform,
    safeArea,
    searchQuery,
  }, { title }) => {
    await page.goto(`${baseUrl}/search?q=${searchQuery}`);
    await page.addStyleTag({
      content: getStyleTagContentSafeArea(safeArea),
    });
    await page.waitForSelector('#root > ion-app.hydrated');
    await page.waitForSelector('ion-card.hydrated');
    // Current Workaround for async load of images
    await page.waitForTimeout(500);
    await page.screenshot({
      path: getPathScreenshot(platform, locale, deviceName, title),
    });
    expect.anything();
  });

  test(`accessibility`, async ({
    baseUrl,
    deviceName,
    locale,
    page,
    platform,
    safeArea,
  }, { title }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto(`${baseUrl}/settings`, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: getStyleTagContentSafeArea(safeArea),
    });
    await page.waitForSelector('#root > ion-app.hydrated');
    await page.screenshot({
      path: getPathScreenshot(platform, locale, deviceName, title),
    });
    await page.emulateMedia({ colorScheme: 'no-preference' });
    expect.anything();
  });

  test(`about`, async ({
    baseUrl,
    deviceName,
    locale,
    page,
    platform,
    safeArea,
  }, { title }) => {
    await page.goto(`${baseUrl}/about`, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: getStyleTagContentSafeArea(safeArea),
    });
    await page.waitForSelector('#root > ion-app.hydrated');
    await page.screenshot({
      path: getPathScreenshot(platform, locale, deviceName, title),
    });
    expect.anything();
  });
});
