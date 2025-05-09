"use client"

import { useState } from "react"
import { Slider } from "@bun-ui/react"

export const SliderRange = () => {
  const [value, setValue] = useState([20, 80])
  return <Slider isRange onValueChange={setValue} value={value} />
}
