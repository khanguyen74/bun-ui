import React, { type HTMLAttributes } from "react"

import { cx } from "../../lib"

const Card = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(
        "bg-card text-card-foreground border-border min-w-[270px] rounded-md border shadow-md",
        className
      )}
      {...props}
    />
  )
)

const CardHeader = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx("flex p-4", className)} {...props} />
))

const CardFooter = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cx("flex items-center p-4 pt-2", className)}
    {...props}
  />
))

const CardContent = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx("p-4 pt-0", className)} {...props} />
))

export { Card, CardHeader, CardFooter, CardContent }
