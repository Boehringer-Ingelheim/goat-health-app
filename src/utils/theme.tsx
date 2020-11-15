export type Theme = {
  className: string;
  i18n: string;
  name: string;
};

export interface Themes {
  [key: string]: Theme;
}

export const THEMES: Themes = {
  bright: {
    name: 'bright',
    i18n: 'SETTINGS.THEME.ITEMS.BRIGHT.LABEL',
    className: 'bright-theme',
  },
  dark: {
    name: 'dark',
    i18n: 'SETTINGS.THEME.ITEMS.DARK.LABEL',
    className: 'dark-theme',
  },
  system: {
    name: 'system',
    i18n: 'SETTINGS.THEME.ITEMS.SYSTEM.LABEL',
    className: 'bright-theme',
  },
};

export const getSystemTheme = (): Theme => {
  // Use matchMedia to check the user preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return { ...THEMES.system, className: THEMES.dark.className };
  }
  return { ...THEMES.system, className: THEMES.bright.className };
};
