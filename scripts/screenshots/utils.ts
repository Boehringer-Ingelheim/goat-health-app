import { BASE_HOST, BASE_PORT } from './global-setup';

export const getBasePort = () => {
  return BASE_PORT;
};

export const getBaseUrl = () => {
  return `${BASE_HOST}:${BASE_PORT}`;
};

export const getPathScreenshot = (
  platform = 'undefined',
  locale = 'undefined',
  deviceName = 'undefined',
  pageTitle = 'undefined',
) => {
  const path = `dist/screenshots/${platform}/${locale}/${deviceName}-${pageTitle}.png`;
  return path.toLowerCase().replace(/ /g, '-');
};

export const getStyleTagContentSafeArea = ({
  top = '0px',
  right = '0px',
  bottom = '0px',
  left = '0px',
}) => {
  return `:root {
    --ion-safe-area-top: ${top};
    --ion-safe-area-right: ${right};
    --ion-safe-area-bottom: ${bottom};
    --ion-safe-area-left: ${left};
  }`;
};
