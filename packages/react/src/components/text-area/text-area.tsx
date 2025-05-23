import React, { useId } from "react"
import { type ClassValue } from "clsx"

import { cx } from "../../lib/utils"
import { Label } from "../label"

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
  label?: React.ReactNode
  labelClassName?: ClassValue
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, labelClassName, id, ...props }, ref) => {
    const _id = id ?? useId()
    if (label) {
      return (
        <div className="flex flex-col gap-2">
          <Label htmlFor={_id} className={cx(labelClassName)}>
            {label}
          </Label>
          <textarea
            id={_id}
            ref={ref}
            className={cx(
              "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 min-h-[50px] w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className
            )}
            {...props}
          />
        </div>
      )
    }
    return (
      <textarea
        id={_id}
        ref={ref}
        className={cx(
          "border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 min-h-[50px] w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      />
    )
  }
)

TextArea.displayName = "TextArea"

export { TextArea }
