/* eslint-disable no-multi-str */
/* eslint-disable no-template-curly-in-string */
module.exports = {
  // HINT: Use `branches: '**',` for any branch
  plugins: [
    '@semantic-release/commit-analyzer',
    // NOTE: Currently we do not want to have any links to the commits and issues in the release note
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        linkCompare: false,
        linkReferences: false,
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      },
    ],
    // More Information about the plugin https://github.com/semantic-release/exec
    // and the api https://semantic-release.gitbook.io/semantic-release/developer-guide/js-api
    [
      '@semantic-release/exec',
      {
        // NOTE: Fallback so that a version number is always available
        analyzeCommitsCmd: 'echo ${lastRelease.version} > .VERSION',
        // NOTE: In case the npm package version should be updated as well
        // verifyReleaseCmd:
        //   'echo ${nextRelease.version} > .VERSION \
        //     && npm version ${nextRelease.version} --no-git-tag-version --allow-same-version',
        verifyReleaseCmd: 'echo ${nextRelease.version} > .VERSION',
        generateNotesCmd: 'echo "${nextRelease.notes}" > .NOTES',
      },
    ],
  ],
};
