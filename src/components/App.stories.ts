import type { Meta, StoryObj } from "@storybook/react";

import { AppProviders } from "./AppProviders";

const meta = {
  title: "AppProviders",
  component: AppProviders,

  args: {
    children: "Foo",
  },
} satisfies Meta<typeof AppProviders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},

  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Primary",
};
