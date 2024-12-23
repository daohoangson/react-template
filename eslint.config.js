/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import js from "@eslint/js";
import vitest from "@vitest/eslint-plugin";
import prettier from "eslint-config-prettier";
import { flatConfigs as importConfigs } from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import testingLibrary from "eslint-plugin-testing-library";
import globals from "globals";
import { configs as typescriptConfigs } from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  prettier,
  reactRefresh.configs.vite,
  testingLibrary.configs["flat/react"],
  vitest.configs.recommended,
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
      "import/resolver": {
        node: true,
        typescript: {
          project: [
            "tsconfig.json",
            "packages/*/tsconfig.json",

            // Specify the app JSON as an workaround for this bug
            // https://github.com/import-js/eslint-import-resolver-typescript/issues/94
            "tsconfig.app.json",
          ],
        },
      },
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
      },
    },
    rules: {
      "@typescript-eslint/no-deprecated": "error",
    },
  },
];
