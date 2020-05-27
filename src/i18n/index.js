import i18n from 'i18next';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import resources from './locales';

const languages = [


  {
    code: 'ru',
    name: 'RUSSIA (RU)',
  },
  {
    code: 'zh',
    name: 'Chinese (中文)',
  },
  {
    code: 'en',
    name: 'English (US)',
  } 
  
];

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    ns: ['app', 'leftSidebar', 'rightSidebar'],
    defaultNS: 'app',
  });

export { languages };

export default i18n;
