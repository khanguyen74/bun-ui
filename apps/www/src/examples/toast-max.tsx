"use client"

import { useState } from "react"
import { Button } from "@bun-ui/react"
import { ToastAction, useToast } from "@bun-ui/react/toast"

export const ToastMax = () => {
  const { createToast, dismiss } = useToast({ maxToasts: 10 })
  const [toastCount, setToastCount] = useState(1)
  return (
    <div className="flex flex-col gap-2">
      <p className="text-muted-foreground text-sm">
        This example allows up to 10 toasts to be displayed at the same time.
      </p>

      <div className="flex gap-2">
        <Button
          onClick={() => {
            createToast({
              title: `Alert ${toastCount}`,
              description: "This is a new notification.",
              action: (
                <ToastAction altText="Acknowledge">Acknowledge</ToastAction>
              ),
            })
            setToastCount((prev) => prev + 1)
          }}
        >
          Show Toast
        </Button>

        <Button onClick={() => dismiss()} variant="secondary">
          Dismiss all
        </Button>
      </div>
    </div>
  )
}
