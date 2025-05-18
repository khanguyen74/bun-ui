import { Button, Tooltip } from "@bun-ui/react"

export const TooltipPlacement = () => {
  return (
    <div className="w-[500px]">
      <div className="flex justify-center">
        <Tooltip content="Tooltip" placement="top-start">
          <Button variant="text">Top-Start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" placement="top">
          <Button variant="text">Top</Button>
        </Tooltip>
        <Tooltip content="Tooltip" placement="top-end">
          <Button variant="text">Top-End</Button>
        </Tooltip>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Tooltip content="Tooltip" placement="left-start">
            <Button variant="text">Left-Start</Button>
          </Tooltip>
          <Tooltip content="Tooltip" placement="left">
            <Button variant="text">Left</Button>
          </Tooltip>
          <Tooltip content="Tooltip" placement="left-end">
            <Button variant="text">Left-End</Button>
          </Tooltip>
        </div>
        <div className="flex flex-col items-end">
          <Tooltip content="Tooltip" placement="right-start">
            <Button variant="text">Right-Start</Button>
          </Tooltip>
          <Tooltip content="Tooltip" placement="right">
            <Button variant="text">Right</Button>
          </Tooltip>
          <Tooltip content="Tooltip" placement="right-end">
            <Button variant="text">Right-End</Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex justify-center">
        <Tooltip content="Tooltip" placement="bottom-start">
          <Button variant="text">Bottom-Start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" placement="bottom">
          <Button variant="text">Bottom</Button>
        </Tooltip>
        <Tooltip content="Tooltip" placement="bottom-end">
          <Button variant="text">Bottom-End</Button>
        </Tooltip>
      </div>
    </div>
  )
}
