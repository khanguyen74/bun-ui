import React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cx } from "../../lib"

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
  /**
   *
   * When the link should have an underline.
   * @default "always"
   */
  underline?: "always" | "none" | "hover"
}
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, asChild, underline = "always", ...props }, ref) => {
    const Comp = asChild ? Slot : "a"

    return (
      <Comp
        ref={ref}
        className={cx(
          "text-primary decoration-primary/50 hover:decoration-primary cursor-pointer underline-offset-2",
          {
            underline: underline === "always",
            "no-underline": underline === "none",
            "hover:underline": underline === "hover",
          },
          className
        )}
        {...props}
      />
    )
  }
)

export { Link }
