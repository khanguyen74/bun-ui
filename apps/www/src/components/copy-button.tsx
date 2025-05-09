"use client"

import React from "react"
import { Button, ButtonProps } from "@bun-ui/react"
import { CheckIcon, ClipboardIcon } from "lucide-react"

import { cx } from "@/lib/classnames"

interface CopyButtonProps extends ButtonProps {
  value: string
  src?: string
}

export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value)
}

export function CopyButton({
  value,
  className,
  variant = "text",
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Button
      variant={variant}
      size="icon"
      className={cx(
        "relative z-10 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-4 [&_svg]:w-4",
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(value)
        setHasCopied(true)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </Button>
  )
}
