"use client"

import { Button, ToastAction } from "@bun-ui/react"

import { useToast } from "@/hooks/use-toast"

export const ToastBasic = () => {
  const { createToast } = useToast()
  return (
    <Button
      onClick={() =>
        createToast({
          title: "Alert",
          action: <ToastAction altText="Acknowledge">Acknowledge</ToastAction>,
        })
      }
    >
      Show toast
    </Button>
  )
}
