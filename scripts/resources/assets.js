/*
 * Resource Generator
 * Inspired by Ionic Capacitor Resources Generator: https://gist.github.com/dalezak/a6b1de39091f4ace220695d72717ac71
 */

const fs = require('fs');
const chalk = require('chalk');
const mobicon = require('mobicon');
const mobisplash = require('mobisplash');

exports.ASSET_SOURCE_ICON = 'resources/icon.png';
exports.ASSET_SOURCE_SPLASH = 'resources/splash.png';

exports.copyImages = async (sourcePath, targetPath, images) => {
  for (const icon of images) {
    let source = sourcePath + icon.source;
    let target = targetPath + icon.target;
    fs.copyFile(source, target, (err) => {
      if (err) {
        console.error(
          `${chalk.bgRed(
            'ERR!',
          )} Could not find the platform folder. Have you already run '${chalk.blue(
            'npx cap add PLATFORM',
          )}'?\n`,
        );
        throw err;
      }
    });
  }
};

exports.generateIcons = async (platform, sourcePath, targetPath) => {
  return await mobicon(sourcePath, {
    platform: platform,
    background: '#fff',
    contentRatio: 1,
    dest: targetPath,
  });
};

exports.generateSplash = async (platform, sourcePath, targetPath) => {
  return await mobisplash(sourcePath, {
    platform: platform,
    background: '#3880ff',
    orientation: 'both',
    contentRatio: 1,
    dest: targetPath,
  });
};
