import React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cx } from "../../lib/utils"
import { Label } from "../label"

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: React.ReactNode
}

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, id, ...props }, ref) => (
  <div className="flex items-center space-x-2">
    <CheckboxPrimitive.Root
      ref={ref}
      id={id}
      className={cx(
        "peer border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4 shrink-0 rounded-xs border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.CheckboxIndicator className="flex items-center justify-center text-current">
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
    {label && <Label htmlFor={id}>{label}</Label>}
  </div>
))

Checkbox.displayName = "Checkbox"

export default Checkbox
