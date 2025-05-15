import dynamic from "next/dynamic"
import { TabContent, TabList, Tabs, TabTrigger } from "@bun-ui/react"

import { highlightCode } from "@/lib/highlightCode"
import { readExampleFile } from "@/lib/readExampleFile"
import { CopyButton } from "./copy-button"

interface Props {
  name: string
}

function formatComponentName(name: string) {
  return name
    .split(/[-\/]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

interface ExampleCodeProps extends Props {
  ext?: string
}

export const ExampleCode = async ({ name, ext }: ExampleCodeProps) => {
  const content = await readExampleFile(name, ext)
  const html = await highlightCode(content)

  return (
    <div className="relative">
      <div
        className="[&_pre]:max-h-[650px] [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:p-2"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <CopyButton value={content} className="absolute top-2 right-2" />
    </div>
  )
}

export const ExamplePreview = ({ name }: Props) => {
  const componentName = formatComponentName(name)
  const Component = dynamic(() =>
    import(`../examples/${name}`).then((mod) => mod[componentName])
  )
  return (
    <div className="flex items-center justify-center overflow-auto rounded-sm border-2 p-10">
      <Component />
    </div>
  )
}

export const ComponentPreview = ({ name }: { name: string }) => {
  return (
    <Tabs defaultValue="preview" className="mt-5 w-full">
      <TabList className="flex items-center justify-start rounded-none bg-transparent p-0">
        <TabTrigger
          value="preview"
          className="data-[state=active]:bg-primary/10 h-full hover:bg-transparent"
        >
          Preview
        </TabTrigger>
        <TabTrigger
          value="code"
          className="data-[state=active]:bg-primary/10 h-full hover:bg-transparent"
        >
          Code
        </TabTrigger>
      </TabList>
      <TabContent value="preview">
        <ExamplePreview name={name} />
      </TabContent>
      <TabContent value="code">
        <ExampleCode name={name} />
      </TabContent>
    </Tabs>
  )
}
