import { RenderOptions, RenderResult, render } from "@testing-library/react";
import { ReactNode } from "react";

import { AppProviders } from "@/components/AppProviders";

export function renderProviders(
  ui: ReactNode,
  options?: RenderOptions,
): RenderResult {
  return render(<AppProviders>{ui}</AppProviders>, options);
}
