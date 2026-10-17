
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**"],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      // Maximum 500 lines per file
      "max-lines": [
        "error",
        {
          max: 500,
          skipBlankLines: false,
          skipComments: false,
        },
      ],

      // Disallow explicit `any`
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules,
      "max-lines": [
        "error",
        {
          max: 500,
          skipBlankLines: false,
          skipComments: false,
        },
      ],
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    ...tseslint.configs.recommended,
    rules: {
      ...tseslint.configs.recommended.rules,
      "max-lines": [
        "error",
        {
          max: 500,
          skipBlankLines: false,
          skipComments: false,
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
];
