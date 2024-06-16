import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
export default [
  {
    parserOptions: {
      requireConfigFile: false,
      ecmaVersion:2020,
      babelOptions: {
        babelrc: false,
        configFile: false,
        presets: ['@babel/preset-env'],
      },
    },
  },
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion:2020,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ['@babel/preset-env'],
        },
      },
    },
  },
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
];
