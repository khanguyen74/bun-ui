import React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cx } from "../../lib"

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cx(
      "flex h-10 w-10 shrink-0 overflow-hidden rounded-full select-none",
      className
    )}
    {...props}
  />
))

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cx("aspect-square h-full w-full rounded-full", className)}
    {...props}
  />
))

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cx(
      "bg-muted flex h-full w-full items-center justify-center rounded-full font-semibold",
      className
    )}
    {...props}
  />
))

export { Avatar, AvatarImage, AvatarFallback }
