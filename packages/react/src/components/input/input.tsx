import React, { useId } from "react"

import { cx } from "../../lib/utils"
import { Label } from "../label"

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: React.ReactNode
  labelClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, labelClassName, id, ...props }, ref) => {
    const _id = id ?? useId()
    const Wrapper = label ? "div" : React.Fragment
    const wrapperClassName = label ? "flex flex-col gap-2" : ""
    return (
      <Wrapper {...(label ? { className: wrapperClassName } : {})}>
        {label && (
          <Label htmlFor={_id} className={labelClassName}>
            {label}
          </Label>
        )}
        <input
          id={_id}
          ref={ref}
          className={cx(
            "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          {...props}
        />
      </Wrapper>
    )
  }
)

Input.displayName = "Input"

export default Input
