import { ToggleGroup, ToggleGroupItem } from "@bun-ui/react"
import { Bold, Italic, Underline } from "lucide-react"

export const ToggleGroupSizes = () => (
  <ToggleGroup size="lg">
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
