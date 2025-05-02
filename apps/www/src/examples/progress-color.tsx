import { Progress } from "@bun-ui/react"

export const ProgressColor = () => (
  <div className="flex h-full w-full flex-col gap-5">
    <Progress value={50} />
    <Progress color="secondary" value={50} />
    <Progress color="accent" value={50} />
    <Progress color="info" value={50} />
  </div>
)
