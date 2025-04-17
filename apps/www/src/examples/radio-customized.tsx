import { RadioGroup, RadioGroupItem } from "@bun-ui/react"

export const RadioCustomized = () => (
  <RadioGroup defaultValue="yes" className="gap-4">
    <RadioGroupItem
      value="yes"
      id="yes"
      label="Yes"
      className="border-green-500 data-[state=checked]:bg-green-500"
      labelClassName="text-green-700 font-semibold"
    />
    <RadioGroupItem
      value="no"
      id="no"
      label="No"
      className="border-red-500 data-[state=checked]:bg-red-500"
      labelClassName="text-red-600 font-semibold"
    />
  </RadioGroup>
)
