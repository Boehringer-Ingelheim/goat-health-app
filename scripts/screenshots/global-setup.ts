import { existsSync } from 'fs';
import * as http from 'http';
import * as path from 'path';
import handler from 'serve-handler';

export const BASE_HOST = 'http://localhost';
export const BASE_PORT = 8080;
export const SERVE_DIRECTORY = path.join(process.cwd(), 'build');

function initEnvironment() {
  const { PLAYWRIGHT_TEST_SCREENSHOT_SEARCH_QUERY, PLAYWRIGHT_TEST_USE_LOCAL } =
    process.env;

  process.env.PLAYWRIGHT_TEST_SCREENSHOT_SEARCH_QUERY =
    PLAYWRIGHT_TEST_SCREENSHOT_SEARCH_QUERY || 'feed';

  process.env.PLAYWRIGHT_TEST_USE_LOCAL = PLAYWRIGHT_TEST_USE_LOCAL || 'en-US';
}

async function globalSetup() {
  initEnvironment();

  await new Promise((resolve, reject) => {
    if (existsSync(SERVE_DIRECTORY)) {
      return resolve('Serve Directory exists!');
    }
    return reject('Serve Directory not found.');
  });

  const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/vercel/serve-handler#options
    return handler(request, response, {
      public: SERVE_DIRECTORY,
      rewrites: [
        {
          source: '**',
          destination: '/index.html',
        },
      ],
    });
  });

  await new Promise((resolve) => {
    server.listen(BASE_PORT, () => {
      console.log(`\x1b[36mRunning Server at ${BASE_HOST}:${BASE_PORT}\x1b[0m`);
      return resolve(true);
    });
  });

  // Return the teardown function.
  return async () => {
    await new Promise((resolve) => server.close(resolve));
  };
}

export default globalSetup;
