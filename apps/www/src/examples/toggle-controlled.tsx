"use client"

import { useState } from "react"
import { Toggle } from "@bun-ui/react"
import { Bold } from "lucide-react"

export const ToggleControlled = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <Toggle
      pressed={pressed}
      onPressedChange={setPressed}
      aria-label="Toggle bold"
    >
      <Bold />
    </Toggle>
  )
}
