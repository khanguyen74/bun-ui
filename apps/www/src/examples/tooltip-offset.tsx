import { Button, Tooltip } from "@bun-ui/react"

export const TooltipOffset = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tooltip content="No offset" offset={0}>
        <Button>No offset</Button>
      </Tooltip>

      <Tooltip content="Small offset" offset={5}>
        <Button>Small offset</Button>
      </Tooltip>

      <Tooltip content="Large offset" offset={20}>
        <Button>Large offset</Button>
      </Tooltip>
    </div>
  )
}
