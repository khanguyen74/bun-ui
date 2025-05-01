import { Skeleton } from "@bun-ui/react"

export const SkeletonCard = () => (
  <div className="w-[50%] space-y-2">
    <Skeleton variant="rectangular" width="100%" height="120px" />
    <Skeleton width="60%" height="1rem" />
    <Skeleton width="80%" height="1rem" />
  </div>
)
