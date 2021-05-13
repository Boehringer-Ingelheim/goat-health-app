import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { enUS, taIN } from './translations';

export const I18N_DEFAULT = 'en';

// Language identifiers as specified by RFC 3066: https://www.i18nguy.com/unicode/language-identifiers.html
export const I18N_LANGUAGES_SUPPORTED = [
  { cultureLang: 'en', name: 'English', nativeName: 'English' },
  { cultureLang: 'ta', name: 'Tamil (India)', nativeName: 'தமிழ்' },
];

// The recommendation is to use non-regional languages: https://github.com/i18next/i18next/issues/1564#issuecomment-788809464
export const resources = {
  en: enUS,
  ta: taIN,
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
    resources,
    cleanCode: true,
    debug: false,
    ns: Object.keys(enUS),
    supportedLngs: ['en', 'ta'],
    fallbackLng: 'en',
    defaultNS: 'app',
    detection: {
      // Took me some time to realize that the fallback language also depends on the detection order.
      // Just keep it simple and don't use storage, etc.
      order: ['navigator'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
