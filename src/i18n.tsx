import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { enUS } from './translations';

export const I18N_DEFAULT = 'en-US';

// Language identifiers as specified by RFC 3066: https://www.i18nguy.com/unicode/language-identifiers.html
export const I18N_LANGUAGES_SUPPORTED = [
  { cultureLang: 'en-US', name: 'English', nativeName: 'English' },
  { cultureLang: 'ta-IN', name: 'Tamil (India)', nativeName: 'தமிழ்' },
];

// const translations = {
//   'en-US': { translation: require('./translations/en-US.json') },
//   'ta-IN': { translation: require('./translations/ta-IN.json') },
// };

export const resources = {
  'en-US': enUS,
};

export default i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // resources: translations,
    resources,
    cleanCode: true,
    debug: false,
    ns: Object.keys(enUS),
    supportedLngs: ['en-US', 'ta-IN'],
    fallbackLng: 'en-US',
    defaultNS: 'app',
    lng: 'en-US',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
