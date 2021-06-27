import { PlaywrightTestConfig } from '@playwright/test';
import { devices } from 'playwright';

export type DeviceFixtures = {
  deviceName: string;
  platform: 'android' | 'ios';
  safeArea: { top: string; bottom: string };
};

const config: PlaywrightTestConfig<DeviceFixtures> = {
  // Each test is given 30 seconds
  timeout: 30000,
  globalSetup: require.resolve('./global-setup'),

  projects: [
    // Android Devices
    {
      name: 'Pixel 2',
      use: {
        browserName: 'chromium',
        deviceName: 'Pixel 2',
        ...devices['Pixel 2'],
        locale: `${process.env.PLAYWRIGHT_TEST_USE_LOCAL}`, // en-US, ta-IN, ml-IN
        platform: 'android',
        safeArea: { top: '24px', bottom: '48px' },
      },
    },
    {
      name: 'Nexus 10',
      use: {
        browserName: 'chromium',
        deviceName: 'Nexus 10',
        ...devices['Nexus 10'],
        locale: `${process.env.PLAYWRIGHT_TEST_USE_LOCAL}`,
        platform: 'android',
        safeArea: { top: '24px', bottom: '48px' },
      },
    },
    // iOS Devices
    {
      name: 'iPhone 8',
      use: {
        browserName: 'chromium',
        deviceName: 'iPhone 8',
        ...devices['iPhone 8'],
        locale: `${process.env.PLAYWRIGHT_TEST_USE_LOCAL}`,
        platform: 'ios',
        safeArea: { top: '20px', bottom: '20px' },
      },
    },
    {
      name: 'iPhone 8 Plus',
      use: {
        browserName: 'chromium',
        deviceName: 'iPhone 8 Plus',
        ...devices['iPhone 8 Plus'],
        locale: `${process.env.PLAYWRIGHT_TEST_USE_LOCAL}`,
        platform: 'ios',
        safeArea: { top: '20px', bottom: '20px' },
      },
    },
    {
      name: 'iPhone 11 Pro',
      use: {
        browserName: 'chromium',
        deviceName: 'iPhone 11 Pro',
        ...devices['iPhone 11 Pro'],
        locale: `${process.env.PLAYWRIGHT_TEST_USE_LOCAL}`,
        platform: 'ios',
        safeArea: { top: '44px', bottom: '44px' },
        // HINT: current workaround to match Apples screenshot specifications
        viewport: { width: 390, height: 844 },
      },
    },
    {
      name: 'iPhone 11 Pro Max',
      use: {
        browserName: 'chromium',
        deviceName: 'iPhone 11 Pro Max',
        ...devices['iPhone 11 Pro Max'],
        locale: `${process.env.PLAYWRIGHT_TEST_USE_LOCAL}`,
        platform: 'ios',
        safeArea: { top: '44px', bottom: '44px' },
        // HINT: current workaround to match Apples screenshot specifications
        viewport: { width: 390, height: 844 },
      },
    },
    {
      name: 'iPad Pro 11',
      use: {
        browserName: 'chromium',
        deviceName: 'iPad Pro 11',
        ...devices['iPad Pro 11'],
        locale: `${process.env.PLAYWRIGHT_TEST_USE_LOCAL}`,
        platform: 'ios',
        safeArea: { top: '20px', bottom: '20px' },
      },
    },
    {
      name: 'iPad Mini',
      use: {
        browserName: 'chromium',
        deviceName: 'iPad Mini',
        ...devices['iPad Mini'],
        locale: `${process.env.PLAYWRIGHT_TEST_USE_LOCAL}`,
        platform: 'ios',
        safeArea: { top: '20px', bottom: '20px' },
      },
    },
  ],
};

export default config;
