const assets = require('./assets');

const PLATFORM = 'android';

const ICON_SOURCE = 'resources/android/icon/';
const ICON_TARGET = 'android/app/src/main/res/';
const ICONS = [
  { source: 'drawable-ldpi-icon.png', target: 'drawable-hdpi-icon.png' },
  { source: 'drawable-mdpi-icon.png', target: 'mipmap-mdpi/ic_launcher.png' },
  {
    source: 'drawable-mdpi-icon.png',
    target: 'mipmap-mdpi/ic_launcher_round.png',
  },
  {
    source: 'drawable-mdpi-icon.png',
    target: 'mipmap-mdpi/ic_launcher_foreground.png',
  },
  { source: 'drawable-hdpi-icon.png', target: 'mipmap-hdpi/ic_launcher.png' },
  {
    source: 'drawable-hdpi-icon.png',
    target: 'mipmap-hdpi/ic_launcher_round.png',
  },
  {
    source: 'drawable-hdpi-icon.png',
    target: 'mipmap-hdpi/ic_launcher_foreground.png',
  },
  { source: 'drawable-xhdpi-icon.png', target: 'mipmap-xhdpi/ic_launcher.png' },
  {
    source: 'drawable-xhdpi-icon.png',
    target: 'mipmap-xhdpi/ic_launcher_round.png',
  },
  {
    source: 'drawable-xhdpi-icon.png',
    target: 'mipmap-xhdpi/ic_launcher_foreground.png',
  },
  {
    source: 'drawable-xxhdpi-icon.png',
    target: 'mipmap-xxhdpi/ic_launcher.png',
  },
  {
    source: 'drawable-xxhdpi-icon.png',
    target: 'mipmap-xxhdpi/ic_launcher_round.png',
  },
  {
    source: 'drawable-xxhdpi-icon.png',
    target: 'mipmap-xxhdpi/ic_launcher_foreground.png',
  },
  {
    source: 'drawable-xxxhdpi-icon.png',
    target: 'mipmap-xxxhdpi/ic_launcher.png',
  },
  {
    source: 'drawable-xxxhdpi-icon.png',
    target: 'mipmap-xxxhdpi/ic_launcher_round.png',
  },
  {
    source: 'drawable-xxxhdpi-icon.png',
    target: 'mipmap-xxxhdpi/ic_launcher_foreground.png',
  },
];

const SPLASH_SOURCE = 'resources/android/splash/';
const SPLASH_TARGET = 'android/app/src/main/res/';
const SPLASHES = [
  { source: 'drawable-land-mdpi-screen.png', target: 'drawable/splash.png' },
  {
    source: 'drawable-land-mdpi-screen.png',
    target: 'drawable-land-mdpi/splash.png',
  },
  {
    source: 'drawable-land-hdpi-screen.png',
    target: 'drawable-land-hdpi/splash.png',
  },
  {
    source: 'drawable-land-xhdpi-screen.png',
    target: 'drawable-land-xhdpi/splash.png',
  },
  {
    source: 'drawable-land-xxhdpi-screen.png',
    target: 'drawable-land-xxhdpi/splash.png',
  },
  {
    source: 'drawable-land-xxxhdpi-screen.png',
    target: 'drawable-land-xxxhdpi/splash.png',
  },
  {
    source: 'drawable-port-mdpi-screen.png',
    target: 'drawable-port-mdpi/splash.png',
  },
  {
    source: 'drawable-port-hdpi-screen.png',
    target: 'drawable-port-hdpi/splash.png',
  },
  {
    source: 'drawable-port-xhdpi-screen.png',
    target: 'drawable-port-xhdpi/splash.png',
  },
  {
    source: 'drawable-port-xxhdpi-screen.png',
    target: 'drawable-port-xxhdpi/splash.png',
  },
  {
    source: 'drawable-port-xxxhdpi-screen.png',
    target: 'drawable-port-xxxhdpi/splash.png',
  },
];

const mobicon = require('mobicon');

(async () => {
  await assets.generateIcons(PLATFORM, assets.ASSET_SOURCE_ICON, ICON_SOURCE);
  await assets.generateSplash(
    PLATFORM,
    assets.ASSET_SOURCE_SPLASH,
    SPLASH_SOURCE,
  );

  // await mobicon('resources/icon.png', {
  //   platform: 'android',
  //   background: '#fff',
  //   borderRadius: 0.5,
  //   contentRatio: 1,
  //   dest: 'resources/android/icon/round',
  // });

  // await mobicon('resources/icon.png', {
  //   platform: 'android',
  //   background: 'transparent',
  //   borderRadius: 0,
  //   contentRatio: 0.75,
  //   roundedCorners: false,
  //   dest: 'resources/android/icon/foreground',
  // });

  await assets.copyImages(ICON_SOURCE, ICON_TARGET, ICONS);
  await assets.copyImages(SPLASH_SOURCE, SPLASH_TARGET, SPLASHES);
})();
