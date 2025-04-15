"use client"

import React from "react"
import { Button, ButtonProps, cx } from "@bun-ui/react"
import { CheckIcon, ClipboardIcon } from "lucide-react"

interface CopyButtonProps extends ButtonProps {
  value: string
  src?: string
}

export async function copyToClipboardWithMeta(value: string) {
  console.log("copyToClipboardWithMeta", value)
  navigator.clipboard.writeText(value)
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
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
      className={cx(
        "pointer-events-auto relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3",
        className
      )}
      onClick={() => {
        console.log("copyToClipboardWithMeta", value)
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
