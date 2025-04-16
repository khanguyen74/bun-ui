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
        className="[&_pre]:rounded-md [&_pre]:p-2"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="absolute top-4 right-6">
        <CopyButton value={content} />
      </div>
    </div>
  )
}

export const ExamplePreview = ({ name }: Props) => {
  const componentName = formatComponentName(name)
  const Component = dynamic(() =>
    import(`../examples/${name}`).then((mod) => mod[componentName])
  )
  return (
    <div className="my-4 flex items-center justify-center">
      <Component />
    </div>
  )
}

export const ComponentPreview = ({ name }: { name: string }) => {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabList className="flex items-center justify-start rounded-none border-b bg-transparent p-0">
        <TabTrigger
          value="preview"
          className="data-[state=active]:border-b-foreground h-full rounded-none data-[state=active]:border-b-2"
        >
          Preview
        </TabTrigger>
        <TabTrigger
          value="code"
          className="data-[state=active]:border-b-foreground h-full rounded-none data-[state=active]:border-b-2"
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
