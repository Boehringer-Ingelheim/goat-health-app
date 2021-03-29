const { devices } = require('playwright');

const BASE_FOLDER = 'dist/screenshots';
const BASE_HOST = 'http://localhost';
const BASE_PORT = 8080;

const ANDROID_DEVICES = [
  {
    ...devices['Pixel 2'],
    name: 'Pixel 2',
    safeArea: { top: '24px', bottom: '48px' },
  },
  {
    ...devices['Nexus 10'],
    name: 'Nexus 10',
    safeArea: { top: '24px', bottom: '48px' },
  },
];
const IOS_DEVICES = [
  {
    ...devices['iPhone 8'],
    name: 'iPhone 8',
    safeArea: { top: '20px', bottom: '20px' },
  },
  {
    ...devices['iPhone 8 Plus'],
    name: 'iPhone 8 Plus',
    safeArea: { top: '20px', bottom: '20px' },
  },
  {
    ...devices['iPhone 11 Pro'],
    name: 'iPhone 11 Pro',
    // HINT: current workaround to match Apples screenshot specifications
    viewport: { width: 390, height: 844 },
    safeArea: { top: '44px', bottom: '44px' },
  },
  {
    ...devices['iPhone 11 Pro Max'],
    name: 'iPhone 11 Pro Max',
    // HINT: current workaround to match Apples screenshot specifications
    viewport: { width: 428, height: 926 },
    safeArea: { top: '44px', bottom: '44px' },
  },
  {
    ...devices['iPad Pro 11'],
    name: 'iPad Pro 11',
    safeArea: { top: '20px', bottom: '20px' },
  },
  {
    ...devices['iPad Mini'],
    name: 'iPad Mini',
    safeArea: { top: '20px', bottom: '20px' },
  },
];

exports.getBasePort = () => {
  return BASE_PORT;
};

exports.getBaseUrl = () => {
  return `${BASE_HOST}:${BASE_PORT}`;
};

const getDeviceInformation = (deviceName = '') => {
  const devices = this.getDevices();
  const device = devices.find((device) => device.name === deviceName);
  return device;
};

exports.getDevices = () => {
  return [...ANDROID_DEVICES, ...IOS_DEVICES];
};

exports.getPathScreenshot = (locale, device, pageTitle) => {
  const platform =
    device.startsWith('iPhone') || device.startsWith('iPad')
      ? 'ios'
      : 'android';
  const path = `${BASE_FOLDER}/${platform}/${locale}/${device}-${pageTitle}.png`;
  return path.toLowerCase().replace(/ /g, '-');
};

const getDeviceSafeArea = (deviceName = '') => {
  const { safeArea = {} } = getDeviceInformation(deviceName);
  return safeArea;
};

exports.getStyleTagContentSafeArea = (deviceName = '') => {
  const { bottom = '0px', top = '0px' } = getDeviceSafeArea(deviceName);

  const content = `:root {
    --ion-safe-area-top: ${top};
    --ion-safe-area-right: 0px;
    --ion-safe-area-bottom: ${bottom};
    --ion-safe-area-left: 0px;
  }`;

  return content;
};
