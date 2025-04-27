"use client"

import { Button } from "@bun-ui/react"
import { useToast } from "@bun-ui/react/toast"

export const ToastWrapper = () => {
  const { createToast } = useToast()

  return (
    <Button
      onClick={() =>
        createToast({
          title: "Your changes have been saved successfully!",
        })
      }
      className="mt-4"
    >
      Show Toast
    </Button>
  )
}
