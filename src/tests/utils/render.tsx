import { RenderOptions, RenderResult, render } from "@testing-library/react";
import { ReactNode } from "react";

import { I18nProvider } from "../../config/i18n";

export function renderProviders(
  ui: ReactNode,
  options?: RenderOptions,
): RenderResult {
  ui = <I18nProvider>{ui}</I18nProvider>;
  return render(ui, options);
}
