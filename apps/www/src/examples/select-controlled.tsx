"use client"

import { useState } from "react"
import { Select, SelectItem } from "@bun-ui/react"

export function SelectControlled() {
  const [value, setValue] = useState("")

  return (
    <div className="flex flex-col">
      <Select
        value={value}
        onValueChange={setValue}
        placeholder="Select your favorite"
        label="CSS Framework"
      >
        <SelectItem value="tailwind">Tailwind CSS</SelectItem>
        <SelectItem value="bootstrap">Bootstrap</SelectItem>
        <SelectItem value="bulma">Bulma</SelectItem>
      </Select>
      {value && <p className="mt-2 text-sm">You selected: {value}</p>}
    </div>
  )
}
