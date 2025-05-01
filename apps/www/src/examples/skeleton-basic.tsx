import { Skeleton } from "@bun-ui/react"

export const SkeletonBasic = () => (
  <div className="flex w-full flex-col items-center">
    <Skeleton variant="circular" width={40} height={40} />
  </div>
)
