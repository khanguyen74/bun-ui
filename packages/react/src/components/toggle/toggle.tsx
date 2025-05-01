import React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cx } from "../../lib"

const toggleVariants = cva(
  "data-[state=on]:bg-foreground/20 hover:not-disabled:not-data-[state=on]:bg-foreground/10 focus-visible:ring-ring inline-flex items-center justify-center rounded-sm hover:not-disabled:cursor-pointer focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none text-foreground ",
  {
    variants: {
      size: {
        sm: "h-6 min-w-6 px-1.5",
        md: "h-8 min-w-8 px-2",
        lg: "h-10 min-w-10 px-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cx(toggleVariants({ className, size }))}
    {...props}
  />
))

export { Toggle, toggleVariants }
