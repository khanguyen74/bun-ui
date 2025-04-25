import fs from "fs"
import path from "path"
import { defineConfig, Options } from "tsup"
import glob from "fast-glob"

const componentEntries = glob.sync("src/components/*/index.ts").map((file) => {
  const name = path.basename(path.dirname(file)) // e.g. "button"
  return {
    entry: file,
    outDir: `dist/${name}`,
  }
})

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
  ...componentEntries.map(({ entry, outDir }) => ({
    entry: [entry],
    outDir,
    format: ["esm"],
    dts: true,
    sourcemap: true,
    clean: false,
    css: true,
    onSuccess: async () => {
      const toastFile = path.resolve("dist/toast/index.mjs")
      if (fs.existsSync(toastFile)) {
        const content = fs.readFileSync(toastFile, "utf8")
        if (!content.startsWith('"use client"')) {
          fs.writeFileSync(toastFile, `"use client";\n\n${content}`)
          console.log(`✅ Added "use client" to ${toastFile}`)
        }
      }
    },
  }) as Options),
])
