import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

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
      exclude: ["src/tests/**", "src/components/**"],
    },
    globals: true,
    setupFiles: ["./src/tests/setup.ts"],
  },
});
