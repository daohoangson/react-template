import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("", "./src"),
    },
  },
  test: {
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
      reporter: ["json", "lcov", "text-summary"],
      // coverage: everything except pure components (will be tested via storybook)
      include: ["src/**"],
      exclude: [
        "src/tests/**",
        "src/components/**",
        // sonar.test.inclusions should include these files
        "**/*.test.ts",
        "**/*.test.tsx",
      ],
    },
    include: ["**/*.test.ts", "**/*.test.tsx"],
    globals: true,
    setupFiles: ["./src/tests/setup.ts"],
  },
});
