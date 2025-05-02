import { Toggle } from "@bun-ui/react"
import { Bold } from "lucide-react"

export const ToggleSizes = () => (
  <div className="flex items-center gap-2">
    <Toggle size="sm">
      <Bold />
    </Toggle>
    <Toggle size="md">
      <Bold />
    </Toggle>
    <Toggle size="lg">
      <Bold />
    </Toggle>
  </div>
)
