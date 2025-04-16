import { readFile } from "fs/promises"
import { resolve } from "path"

export const readExampleFile = async (name: string, ext = "tsx") => {
  const filePath = resolve("./src/examples/", `${name}.${ext}`)

  let fileContent = await readFile(filePath, "utf-8")
  fileContent = fileContent.replace(
    /export const \w+ = \(\) => \{/,
    "const Demo = () => {"
  )

  return fileContent
}
