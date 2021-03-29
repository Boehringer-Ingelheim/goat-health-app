const path = require('path');

const {
  JEST_PLAYWRIGHT_CONFIG,
  JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL,
  JEST_PLAYWRIGHT_SCREENSHOT_SEARCH_QUERY,
} = process.env;

process.env.JEST_PLAYWRIGHT_CONFIG =
  JEST_PLAYWRIGHT_CONFIG ||
  path.join(process.cwd(), 'scripts/screenshots/jest-playwright.config.js');

process.env.JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL =
  JEST_PLAYWRIGHT_CONTEXT_OPTION_LOCAL || 'en-US';

process.env.JEST_PLAYWRIGHT_SCREENSHOT_SEARCH_QUERY =
  JEST_PLAYWRIGHT_SCREENSHOT_SEARCH_QUERY || 'feed';

module.exports = {
  preset: 'jest-playwright-preset',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
