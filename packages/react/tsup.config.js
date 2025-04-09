import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  outdir: "dist",
  css: true, // Enable CSS processing,
  plugins: [require("@tailwindcss/postcss")(), require("autoprefixer")()],
});

// export default {
//   plugins: [require('@tailwindcss/postcss')(), require('autoprefixer')()],
// }
