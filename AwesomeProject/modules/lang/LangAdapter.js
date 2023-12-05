import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './localization/tat.json';
import ru from './localization/ru.json';
import {LangType} from './LangType';

export const defaultNS = 'common';
export const resources = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
};
i18n.use(initReactI18next).init({
  resources,
  debug: true,
  lng: LangType.RU,
  compatibilityJSON: 'v3',
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
});
export const Localization = i18n;
