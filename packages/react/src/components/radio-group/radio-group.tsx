import React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cx } from "../../lib/utils"

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    {...props}
    className={cx("grid gap-2", className)}
    ref={ref}
  />
))

RadioGroup.displayName = "RadioGroup"

export default RadioGroup
