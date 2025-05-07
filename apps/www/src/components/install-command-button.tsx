"use client"

import { useEffect, useState } from "react"
import { Button } from "@bun-ui/react"
import { Check, Clipboard, Terminal } from "lucide-react"

export const InstallCommandButton = () => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText("npm i @bun-ui/react")
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  return (
    <Button
      onClick={handleCopy}
      variant="outlined"
      aria-label="Copy install command"
      className="group relative flex h-fit cursor-copy items-center py-3 pr-8 font-mono text-sm"
    >
      <Terminal className="mr-2 hidden h-4 w-4 sm:block" />
      npm i @bun-ui/react
      <span className="absolute right-[6px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {copied ? <Check /> : <Clipboard />}
      </span>
    </Button>
  )
}
