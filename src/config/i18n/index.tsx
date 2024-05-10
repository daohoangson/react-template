import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { FC, PropsWithChildren } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

import { english, englishTranslations } from "./en";

// eslint-disable-next-line react-refresh/only-export-components
export const resources = {
  [english]: {
    translation: englishTranslations,
  },
} as const;

// eslint-disable-next-line import/no-named-as-default-member
void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: english,

    interpolation: {
      // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      escapeValue: false,
    },
  });

export const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
