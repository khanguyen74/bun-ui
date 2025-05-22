"use client"

import { useState } from "react"
import { Input } from "@bun-ui/react"

export const InputControlled = () => {
  const [value, setValue] = useState("")

  return (
    <div className="w-[300px] space-y-2 text-wrap">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        label="Controlled Input"
        className="w-[300px]"
      />
      <p className="text-muted-foreground text-sm">Current: {value}</p>
    </div>
  )
}
