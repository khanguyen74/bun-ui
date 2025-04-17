"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@bun-ui/react"

export const RadioControlled = () => {
  const [value, setValue] = useState("light")

  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <RadioGroupItem value="light" label="Light" id="light" />
      <RadioGroupItem value="dark" label="Dark" id="dark" />
      <RadioGroupItem value="system" label="System" id="system" />
    </RadioGroup>
  )
}
