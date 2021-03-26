const { devices } = require('playwright');

const BASE_FOLDER = 'dist/screenshots';
const BASE_HOST = 'http://localhost';
const BASE_PORT = 8080;

const ANDROID_DEVICES = ['Pixel 2', 'Nexus 10'];
const IOS_DEVICES = [
  'iPhone 8',
  'iPhone 8 Plus',
  // HINT: current workaround to match Apples screenshot specifications
  {
    ...devices['iPhone 11 Pro'],
    name: 'iPhone 11 Pro',
    viewport: { width: 390, height: 844 },
  },
  // HINT: current workaround to match Apples screenshot specifications
  {
    ...devices['iPhone 11 Pro Max'],
    name: 'iPhone 11 Pro Max',
    viewport: { width: 428, height: 926 },
  },
  'iPad Pro 11',
  'iPad Mini',
];

exports.getBasePort = () => {
  return BASE_PORT;
};

exports.getBaseUrl = () => {
  return `${BASE_HOST}:${BASE_PORT}`;
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
