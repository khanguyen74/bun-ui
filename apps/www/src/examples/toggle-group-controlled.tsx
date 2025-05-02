"use client"

import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@bun-ui/react"
import { Bold, Italic, Underline } from "lucide-react"

export const ToggleGroupControlled = () => {
  const [value, setValue] = useState("bold")
  return (
    <div className="flex flex-col gap-5">
      <ToggleGroup size="lg" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
      <p>Selected: {value}</p>
    </div>
  )
}
