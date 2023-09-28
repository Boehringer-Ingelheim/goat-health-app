const path = require('path');
const { getDevices, getBaseUrl, getBasePort } = require('./utils');

// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
  browsers: ['chromium'],
  contextOptions: {
    locale: `${process.env.JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL}`, // en-US, ta-IN, ml-IN
  },
  devices: getDevices(),
  serverOptions: {
    command: `npx http-server@0.12.3 ${path.join(
      process.cwd(),
      'dist',
    )} --proxy ${getBaseUrl()}? --silent`,
    port: getBasePort(),
    launchTimeout: 30000,
    debug: false,
  },
  launchOptions: {
    headless: true,
  },
};
