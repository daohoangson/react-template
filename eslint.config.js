/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import { flatConfigs as importConfigs } from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import { configs as typescriptConfigs } from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  prettier,
  { ignores: ["coverage", "dist", "storybook-static"] },

  // import
  importConfigs.recommended,
  importConfigs.typescript,
  {
    rules: {
      "import/no-extraneous-dependencies": "error",
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc", orderImportKind: "desc" },
          "newlines-between": "always",
          warnOnUnassignedImports: true,
        },
      ],
    },
    settings: {
      "import/internal-regex": "^@/",
      "import/resolver": { node: true, typescript: true },
    },
  },

  // react
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  { settings: { react: { version: "detect" } } },

  // react-hooks
  {
    plugins: { "react-hooks": reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },

  // react-refresh
  {
    plugins: { "react-refresh": reactRefresh },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },

  // storybook
  ...storybook.configs["flat/recommended"],
  { ignores: ["!.storybook"] },

  // typescript
  ...typescriptConfigs.recommendedTypeChecked,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: {
          allowDefaultProject: [".storybook/*.js", "*.js"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-deprecated": "error",
    },
  },
];
