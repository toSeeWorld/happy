import babelParser from "@babel/eslint-parser";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

import js from "@eslint/js";
export default [
  {
    ignores: ["dist/*"],
  },
  {
    // ...other config
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ["@babel/preset-env"],
        },
      },
      
        globals: {
          ...globals.browser,
          myCustomGlobal: "readonly",
        },
    },
    plugins: {},
    rules: {
      "no-debugger": "error",
    },
  },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      eslintPluginPrettier,
    },
  },
];
