"use client"

import React from "react"
import { Switch } from "@bun-ui/react"

export const SwitchCustomized = () => {
  const [isOnline, setIsOnline] = React.useState(true)

  return (
    <div className="flex items-center justify-between gap-4 rounded-md border p-4 shadow-sm">
      <div>
        <p className="font-medium">Online Status</p>
        <p className="text-muted-foreground text-sm">
          {isOnline ? "You are online" : "You are offline"}
        </p>
      </div>
      <Switch
        checked={isOnline}
        onCheckedChange={setIsOnline}
        thumbClassName="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500 dark:data-[state=checked]:bg-green-500 dark:data-[state=unchecked]:bg-red-500"
        className="data-[state=checked]:bg-green-200 data-[state=unchecked]:bg-red-200 dark:data-[state=checked]:bg-green-200 dark:data-[state=unchecked]:bg-red-200"
        label="Online"
        labelClassName="sr-only"
      />
    </div>
  )
}
