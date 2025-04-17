import { RadioGroup, RadioGroupItem } from "@bun-ui/react"

export const RadioBasic = () => (
  <RadioGroup defaultValue="option-1">
    <RadioGroupItem value="option-1" label="Option 1" id="option-1" />
    <RadioGroupItem value="option-2" label="Option 2" id="option-2" />
  </RadioGroup>
)
