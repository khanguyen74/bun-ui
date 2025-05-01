import { cva, type VariantProps } from "class-variance-authority"

import { cx } from "../../lib"

const skeletonVariants = cva(
  "animate-pulse bg-primary/20 max-w-content h-[1.2rem]",
  {
    variants: {
      variant: {
        circular: "rounded-full",
        rectangular: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "circular",
    },
  }
)

interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  width?: string | number
  height?: string | number
  className?: string
}

const Skeleton = ({ width, height, className, variant }: SkeletonProps) => {
  return (
    <div
      className={cx(skeletonVariants({ className, variant }))}
      style={{ width, height }}
    />
  )
}

export { Skeleton }
