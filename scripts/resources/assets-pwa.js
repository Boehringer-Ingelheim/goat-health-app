const assets = require('./assets');

const PLATFORM = 'pwa';

const ICON_SOURCE = 'resources/pwa/icon/';
const ICON_TARGET = 'public/assets/icon/';
const ICONS = [
  { source: 'icon-72x72.png', target: 'icon-72x72.png' },
  { source: 'icon-96x96.png', target: 'icon-96x96.png' },
  { source: 'icon-128x128.png', target: 'icon-128x128.png' },
  { source: 'icon-144x144.png', target: 'icon-144x144.png' },
  { source: 'icon-152x152.png', target: 'icon-152x152.png' },
  { source: 'icon-192x192.png', target: 'icon-192x192.png' },
  { source: 'icon-384x384.png', target: 'icon-384x384.png' },
  { source: 'icon-512x512.png', target: 'icon-512x512.png' },
];

(async () => {
  await assets.generateIcons(PLATFORM, assets.ASSET_SOURCE_ICON, ICON_SOURCE);

  await assets.copyImages(ICON_SOURCE, ICON_TARGET, ICONS);
})();
