"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cx } from "../../lib"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cx("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = "DrawerOverlay"

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  /**
   * Whether to show the drag handle.
   * @default true
   */
  showDragHandle?: boolean
}

const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ className, children, showDragHandle = true, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cx(
        "bg-background fixed inset-x-0 bottom-0 z-50 flex h-auto flex-col rounded-t-[10px] border",
        className
      )}
      {...props}
    >
      {showDragHandle && (
        <div className="bg-muted mx-auto mt-4 h-2 w-[100px] rounded-full" />
      )}
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cx(
      "text-lg leading-none font-semibold tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = "DrawerTitle"

const DrawerDescription = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cx("text-muted-foreground text-sm", className)}
    {...props}
  />
))
DrawerDescription.displayName = "DrawerDescription"

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  type DrawerContentProps,
}
