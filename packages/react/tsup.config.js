import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts", "src/components/*/index.ts", "src/hooks/*/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  outdir: "dist",
  splitting: false,
  target: "esnext",
  css: true, // Enable CSS processing,
  plugins: [require("@tailwindcss/postcss")(), require("autoprefixer")()],
})
