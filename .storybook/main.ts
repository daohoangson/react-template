import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.ts",
    "../src/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    const { default: istanbul } = await import("vite-plugin-istanbul");
    return mergeConfig(config, {
      build: { sourcemap: true },
      plugins: [
        istanbul({
          // coverage: pure components only
          include: "src/components/**",
          exclude: [
            // sonar.test.inclusions should include these files
            "**/*.stories.ts",
            "**/*.stories.tsx",
          ],
        }),
      ],
    });
  },
};
export default config;
