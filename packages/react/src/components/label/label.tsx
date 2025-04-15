import React from "react"
import * as LabelPrimitives from "@radix-ui/react-label"

import { cx } from "../../lib/utils"

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitives.Root
    ref={ref}
    className={cx(
      "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))

Label.displayName = "Label"

export default Label
