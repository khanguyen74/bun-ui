import { ToggleGroup, ToggleGroupItem } from "@bun-ui/react"
import { Bold, Italic, Underline } from "lucide-react"

export const ToggleGroupMultiple = () => (
  <ToggleGroup type="multiple">
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
)
