import fs from "fs"
import path from "path"
import { defineConfig } from "tsup"

export default defineConfig(() => [
  {
    entry: ["src/index.ts"],
    outDir: "dist",
    format: ["esm"],
    dts: true,
    sourcemap: true,
    clean: true,
    target: "esnext",
    splitting: false,
    css: true,
  },
  {
    entry: ["src/components/toast/index.ts"],
    outDir: "dist/toast",
    format: ["esm"],
    dts: true,
    sourcemap: true,
    clean: false,
    target: "esnext",
    splitting: false,
    css: true,
    onSuccess: async () => {
      const toastFile = path.resolve("dist/toast/index.mjs")
      if (fs.existsSync(toastFile)) {
        const content = fs.readFileSync(toastFile, "utf8")
        if (!content.startsWith('"use client"')) {
          fs.writeFileSync(toastFile, `"use client";\n\n${content}`)
        }
      }
    },
  },
])
