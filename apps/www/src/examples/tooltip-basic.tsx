import { Button, Tooltip } from "@bun-ui/react"
import { Trash2 } from "lucide-react"

export const TooltipBasic = () => {
  return (
    <Tooltip content="Delete">
      <Button size="icon" variant="text" color="neutral">
        <Trash2 />
      </Button>
    </Tooltip>
  )
}
