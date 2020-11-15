const assets = require('./assets');

const PLATFORM = 'ios';

const ICON_SOURCE = 'resources/ios/icon/';
const ICON_TARGET = 'ios/App/App/Assets.xcassets/AppIcon.appiconset/';
const ICONS = [
  { source: 'icon-20.png', target: 'AppIcon-20x20@1x.png' },
  { source: 'icon-40.png', target: 'AppIcon-20x20@2x.png' },
  { source: 'icon-40.png', target: 'AppIcon-20x20@2x-1.png' },
  { source: 'icon-60.png', target: 'AppIcon-20x20@3x.png' },
  { source: 'icon-small.png', target: 'AppIcon-29x29@1x.png' },
  { source: 'icon-small@2x.png', target: 'AppIcon-29x29@2x.png' },
  { source: 'icon-small@2x.png', target: 'AppIcon-29x29@2x-1.png' },
  { source: 'icon-small@3x.png', target: 'AppIcon-29x29@3x.png' },
  { source: 'icon-40.png', target: 'AppIcon-40x40@1x.png' },
  { source: 'icon-40@2x.png', target: 'AppIcon-40x40@2x.png' },
  { source: 'icon-40@2x.png', target: 'AppIcon-40x40@2x-1.png' },
  { source: 'icon-40@3x.png', target: 'AppIcon-40x40@3x.png' },
  { source: 'icon-60@2x.png', target: 'AppIcon-60x60@2x.png' },
  { source: 'icon-60@3x.png', target: 'AppIcon-60x60@3x.png' },
  { source: 'icon-76.png', target: 'AppIcon-76x76@1x.png' },
  { source: 'icon-76@2x.png', target: 'AppIcon-76x76@2x.png' },
  { source: 'icon-83.5@2x.png', target: 'AppIcon-83.5x83.5@2x.png' },
  { source: 'icon-1024.png', target: 'AppIcon-512@2x.png' },
];

const SPLASH_SOURCE = 'resources/ios/splash/';
const SPLASH_TARGET = 'ios/App/App/Assets.xcassets/Splash.imageset/';
const SPLASHES = [
  {
    source: 'Default@2x~universal~anyany.png',
    target: 'splash-2732x2732.png',
  },
  {
    source: 'Default@2x~universal~anyany.png',
    target: 'splash-2732x2732-1.png',
  },
  {
    source: 'Default@2x~universal~anyany.png',
    target: 'splash-2732x2732-2.png',
  },
];

(async () => {
  await assets.generateIcons(PLATFORM, assets.ASSET_SOURCE_ICON, ICON_SOURCE);
  await assets.generateSplash(
    PLATFORM,
    assets.ASSET_SOURCE_SPLASH,
    SPLASH_SOURCE,
  );

  await assets.copyImages(ICON_SOURCE, ICON_TARGET, ICONS);
  await assets.copyImages(SPLASH_SOURCE, SPLASH_TARGET, SPLASHES);
})();
