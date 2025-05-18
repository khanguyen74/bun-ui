import { Button, Tooltip } from "@bun-ui/react"

export const TooltipClick = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tooltip content="Click to show tooltip" clickOnly>
        <Button>Click me</Button>
      </Tooltip>

      <Tooltip content="Hover to show tooltip" clickOnly={false}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  )
}
