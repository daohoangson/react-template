import { FC, PropsWithChildren } from "react";

import { I18nProvider } from "@/config/i18n";

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  let node = children;
  node = <I18nProvider>{node}</I18nProvider>;
  return node;
};
