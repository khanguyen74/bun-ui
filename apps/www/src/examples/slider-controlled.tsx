"use client"

import { useState } from "react"
import { Input, Slider } from "@bun-ui/react"

export const SliderControlled = () => {
  const [value, setValue] = useState(50)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    if (isNaN(newValue) || newValue < 0 || newValue > 100) {
      return
    }
    setValue(newValue)
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <Input
        label="Current value"
        value={value}
        type="number"
        className="w-20"
        onChange={handleInputChange}
      />
      <Slider
        value={value}
        onValueChange={([newValue]) => setValue(newValue)}
        max={100}
      />
    </div>
  )
}
