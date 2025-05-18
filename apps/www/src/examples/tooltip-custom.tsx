import { Button, Tooltip } from "@bun-ui/react"

const CustomTooltipContent = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <p className="font-semibold">Feature Details</p>
      <p className="text-muted-foreground text-sm">This feature includes:</p>
      <ul className="text-muted-foreground list-inside list-disc text-sm">
        <li>Custom styling</li>
        <li>Rich content</li>
        <li>Multiple elements</li>
      </ul>
    </div>
  )
}

export const TooltipCustom = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tooltip
        content={<CustomTooltipContent />}
        className="bg-background border shadow-lg"
      >
        <Button>View Details</Button>
      </Tooltip>
    </div>
  )
}
