import { ToggleGroup, ToggleGroupItem } from "@bun-ui/react"
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react"

export const ToggleGroupBasic = () => (
  <ToggleGroup>
    <ToggleGroupItem value="left">
      <AlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <AlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <AlignRight />
    </ToggleGroupItem>
  </ToggleGroup>
)
