// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
  browsers: ['chromium'],
  contextOptions: {
    locale: 'en-US', // en-US, ta-IN, ml-IN
  },
  // devices: ['Pixel 2', 'Nexus 10', 'iPhone 11 Pro', 'iPad Pro 11'],
  devices: ['Pixel 2'],
  serverOptions: {
    command: 'npx http-server build --proxy http://localhost:8080? --silent',
    port: 8080,
    launchTimeout: 30000,
    debug: true,
  },
  launchOptions: {
    headless: true,
  },
};
