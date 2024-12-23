import { mergeConfig } from "vite";

/**
 * @type {import('@storybook/react-vite').StorybookConfig}
 */
const config = {
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
    autodocs: true,
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
