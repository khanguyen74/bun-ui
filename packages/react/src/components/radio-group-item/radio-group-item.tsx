import React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cx } from "../../lib/utils"
import { Label } from "../label"

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: React.ReactNode
  labelClassName?: string
}

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, value, label, labelClassName, id, ...props }, ref) => (
  <div className="flex items-center space-x-2">
    <RadioGroupPrimitive.Item
      ref={ref}
      id={id}
      value={value}
      {...props}
      className={cx(
        "border-primary text-primary ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
    {label && (
      <Label htmlFor={id} className={cx(labelClassName)}>
        {label}
      </Label>
    )}
  </div>
))

RadioGroupItem.displayName = "RadioGroupItem"

export default RadioGroupItem
