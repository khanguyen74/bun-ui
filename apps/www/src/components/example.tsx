"use client"

import dynamic from "next/dynamic"

interface ExamplePreviewProps {
  name: string
}

function formatComponentName(name: string) {
  return name
    .split(/[-\/]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}
export const ExamplePreview = ({ name }: ExamplePreviewProps) => {
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
