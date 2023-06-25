import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './es.json';
import en from './en.json';

i18next
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      es: { translation: es }
    }
  });

export default i18next;