import React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cx } from "../../lib/utils"
import { CircleIcon } from "../icons"
import { Label } from "../label"

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: React.ReactNode
  labelClassName?: string
}

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    { className, value, label, labelClassName, id, disabled, ...props },
    ref
  ) => {
    const _id = id || React.useId()
    const Wrapper = label ? "div" : React.Fragment
    const wrapperClassName = label ? "flex items-center space-x-2" : ""
    return (
      <Wrapper {...(label ? { className: wrapperClassName } : {})}>
        <RadioGroupPrimitive.Item
          ref={ref}
          id={_id}
          value={value}
          disabled={disabled}
          {...props}
          className={cx(
            "border-primary text-primary ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 cursor-pointer rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <CircleIcon className="h-2.5 w-2.5 fill-current text-current" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label && (
          <Label
            htmlFor={_id}
            className={cx(
              "cursor-pointer",
              disabled && "cursor-not-allowed",
              labelClassName
            )}
          >
            {label}
          </Label>
        )}
      </Wrapper>
    )
  }
)

RadioGroupItem.displayName = "RadioGroupItem"

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

export { RadioGroup, RadioGroupItem }
