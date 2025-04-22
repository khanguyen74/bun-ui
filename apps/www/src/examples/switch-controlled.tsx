"use client"

import React from "react"
import { Switch } from "@bun-ui/react"

export const SwitchControlled = () => {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <Switch
      checked={enabled}
      onCheckedChange={setEnabled}
      aria-label="Toggle dark mode"
      label="Dark mode"
    />
  )
}
