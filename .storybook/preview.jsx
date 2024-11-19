import React from "react";

import { AppProviders } from "../src/components/AppProviders";

/**
 * @type {import('@storybook/react').Preview}
 */
const preview = {
  decorators: [
    (Story) => (
      <AppProviders>
        <Story />
      </AppProviders>
    ),
  ],
};

export default preview;
