"use client"

import { Button } from "@bun-ui/react"
import { ToastAction, useToast } from "@bun-ui/react/toast"

export const ToastActionButton = () => {
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
