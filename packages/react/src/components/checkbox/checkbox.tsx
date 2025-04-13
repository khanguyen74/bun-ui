import React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"

import { cx } from "../../lib/utils"
import { Label } from "../label"

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string
}

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, ...props }, ref) => (
  <div className="flex items-center space-x-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cx(
        "peer border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4 shrink-0 rounded-xs border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.CheckboxIndicator>
        <CheckIcon className="flex items-center justify-center text-current" />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
    {label && <Label>{label}</Label>}
  </div>
))

Checkbox.displayName = "Checkbox"

export default Checkbox
