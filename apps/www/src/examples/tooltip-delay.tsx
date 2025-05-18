import { Button, Tooltip } from "@bun-ui/react"

export const TooltipDelay = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tooltip content="Fast tooltip" openDelay={0} closeDelay={0}>
        <Button>Instant</Button>
      </Tooltip>

      <Tooltip content="Default tooltip" openDelay={500} closeDelay={0}>
        <Button>Default</Button>
      </Tooltip>

      <Tooltip content="Slow tooltip" openDelay={1000} closeDelay={500}>
        <Button>Slow</Button>
      </Tooltip>
    </div>
  )
}
