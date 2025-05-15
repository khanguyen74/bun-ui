import React, { useId } from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cva } from "class-variance-authority"

import { cx } from "../../lib/utils"
import { CheckIcon } from "../icons"
import { Label } from "../label"

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: React.ReactNode
  color?: "primary" | "secondary" | "neutral"
}

const checkboxVariants = cva(
  "peer ring-offset-background focus-visible:ring-ring  disabled:cursor-not-allow h-4 w-4 shrink-0 cursor-pointer rounded-xs border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50",
  {
    variants: {
      color: {
        primary:
          "border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        secondary:
          "border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground",
        neutral:
          "border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
)

const Checkbox = React.forwardRef<
  Omit<React.ComponentRef<typeof CheckboxPrimitive.Root>, "color">,
  CheckboxProps
>(({ className, label, id, disabled, color, ...props }, ref) => {
  const _id = id || useId()
  return (
    <div className="flex items-center space-x-2">
      <CheckboxPrimitive.Root
        ref={ref}
        id={_id}
        className={cx(checkboxVariants({ color, className }))}
        disabled={disabled}
        {...props}
      >
        <CheckboxPrimitive.CheckboxIndicator
          className={cx("flex items-center justify-center text-current")}
        >
          <CheckIcon className="h-4 w-4" />
        </CheckboxPrimitive.CheckboxIndicator>
      </CheckboxPrimitive.Root>
      {label && (
        <Label
          className={cx("cursor-pointer", disabled && "cursor-not-allowed")}
          htmlFor={_id}
        >
          {label}
        </Label>
      )}
    </div>
  )
})

Checkbox.displayName = "Checkbox"

export default Checkbox
