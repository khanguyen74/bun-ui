import { RadioGroup, RadioGroupItem } from "@bun-ui/react"

export const RadioDisabled = () => (
  <RadioGroup>
    <RadioGroupItem value="a" label="Enabled Option" id="enabled" />
    <RadioGroupItem value="b" label="Disabled Option" id="disabled" disabled />
  </RadioGroup>
)
