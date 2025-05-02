import { Skeleton } from "@bun-ui/react"

export const SkeletonBasic = () => (
  <div className="mt-5 flex items-center space-x-2">
    <Skeleton className="h-12 w-12" />
    <div className="space-y-2">
      <Skeleton variant="rectangular" width="8rem" height="10px" />
      <Skeleton variant="rectangular" width="13rem" height="10px" />
    </div>
  </div>
)
