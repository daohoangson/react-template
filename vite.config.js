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
      exclude: ["**/[.]**", "**/*.d.ts", "src/stories/**"],
    },
    globals: true,
    setupFiles: ["./src/tests/setup.ts"],
  },
});
