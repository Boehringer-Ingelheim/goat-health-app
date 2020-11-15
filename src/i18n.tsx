import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const I18N_DEFAULT = 'en';

// Language identifiers as specified by RFC 3066: https://www.i18nguy.com/unicode/language-identifiers.html
export const I18N_LANGUAGES_SUPPORTED = [
  { cultureLang: 'en', name: 'English', nativeName: 'English' },
];

const translations = {
  en: { translation: require('./translations/en.json') },
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
    resources: translations,
    cleanCode: true,
    debug: true,
    fallbackLng: {
      'de-DE': ['de'],
      'en-US': ['en'],
      default: [I18N_DEFAULT],
    },
    whitelist: I18N_LANGUAGES_SUPPORTED.map((language) => language.cultureLang),
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
