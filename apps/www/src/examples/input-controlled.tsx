"use client"

import { useState } from "react"
import { Input } from "@bun-ui/react"

export const InputControlled = () => {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        label="Controlled Input"
      />
      <p className="text-muted-foreground text-sm">Current: {value}</p>
    </div>
  )
}
