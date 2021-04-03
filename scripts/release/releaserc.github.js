/* eslint-disable no-template-curly-in-string */
module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', { npmPublish: false }],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'build',
            label: 'goat-health-app-${nextRelease.version}-browser',
          },
        ],
      },
    ],
    '@semantic-release/git',
  ],
};
