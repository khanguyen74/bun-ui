"use client"

import { useState } from "react"
import { Select, SelectItem } from "@bun-ui/react"

export function SelectControlled() {
  const [value, setValue] = useState("tailwind")

  return (
    <div className="flex flex-col">
      <Select
        value={value}
        onValueChange={setValue}
        placeholder="Select your favorite"
        label="CSS Framework"
        className="w-[200px]"
      >
        <SelectItem value="tailwind">Tailwind CSS</SelectItem>
        <SelectItem value="bootstrap">Bootstrap</SelectItem>
        <SelectItem value="bulma">Bulma</SelectItem>
      </Select>
      {value && <p className="mt-2 text-sm">You selected: {value}</p>}
    </div>
  )
}
