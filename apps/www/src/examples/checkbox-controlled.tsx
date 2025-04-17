"use client"

import { useState } from "react"
import { Checkbox } from "@bun-ui/react"

export const CheckboxControlled = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = (checked: boolean) => {
    setChecked(checked)
  }
  return (
    <Checkbox
      label="Accept terms and conditions"
      checked={checked}
      onCheckedChange={handleChange}
    />
  )
}
