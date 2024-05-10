import type { Preview } from "@storybook/react";
import React from "react";

import { AppProviders } from "../src/components/AppProviders";

const preview: Preview = {
  decorators: [
    (Story) => (
      <AppProviders>
        <Story />
      </AppProviders>
    ),
  ],
};

export default preview;
