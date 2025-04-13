import eslint from "@eslint/js"
import tseslintPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

export default defineConfig([
  eslintPluginPrettierRecommended,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply to TypeScript files
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      parserOptions: {
        project: "./tsconfig.json", // Specify your project's tsconfig.json
      },
    },
    plugins: {
      "@typescript-eslint": tseslintPlugin, // Add the TypeScript ESLint plugin
    },
    rules: {
      // Add TypeScript-specific rules if needed
    },
  },
])
