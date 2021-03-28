import { useMemo } from 'react';

export type ThemeName = 'bright' | 'dark' | 'system';

export type Theme = {
  [key in ThemeName]: {
    className: string;
    i18n: string;
    name: key;
  };
};

export const THEMES: Theme = {
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

const getThemeByName = (name: ThemeName = 'system') => {
  if (name === 'system') {
    // Use matchMedia to check the user preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return { ...THEMES.system, className: THEMES.dark.className };
    }
    return { ...THEMES.system, className: THEMES.bright.className };
  }
  return { ...THEMES[name] };
};

export const useTheme = (name: ThemeName = 'system') =>
  useMemo(() => {
    const theme = getThemeByName(name);
    return { theme, themes: THEMES };
  }, [name]);
