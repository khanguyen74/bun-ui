"use client"

import * as runtime from "react/jsx-runtime"
import { cx } from "@bun-ui/react"

import { CopyButton } from "./copy-button"
import { ExamplePreview } from "./example"

const sharedComponents = {
  ExamplePreview,
  CopyButton,
  pre: ({
    className,
    __rawString__,
    __withMeta__,
    __src__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string
    __withMeta__?: boolean
    __src__?: string
  }) => {
    return (
      <div className="relative">
        <pre
          className={cx(
            "mt-6 mb-4 max-h-[650px] overflow-x-auto rounded-xl bg-zinc-950 py-4 dark:bg-zinc-900",
            className
          )}
          {...props}
        />
        {__rawString__ && (
          <CopyButton
            value={__rawString__}
            src={__src__}
            className={cx(
              "absolute top-4 right-4 z-20",
              __withMeta__ && "top-16"
            )}
          />
        )}
      </div>
    )
  },
}

// parse the Velite generated MDX code into a React component function
const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

// MDXContent component
export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} />
}
