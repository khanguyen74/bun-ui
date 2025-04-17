import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react"
import * as TabsPrimitives from "@radix-ui/react-tabs"

import { cx } from "../../lib"

const Tabs = forwardRef<
  ComponentRef<typeof TabsPrimitives.Root>,
  ComponentPropsWithoutRef<typeof TabsPrimitives.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitives.Root
    ref={ref}
    className={cx("flex flex-col gap-2", className)}
    {...props}
  />
))

Tabs.displayName = "Tabs"

const TabList = forwardRef<
  ComponentRef<typeof TabsPrimitives.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitives.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitives.List
    ref={ref}
    className={cx(
      "bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1",
      className
    )}
    {...props}
  />
))

TabList.displayName = "TabList"

const TabTrigger = forwardRef<
  ComponentRef<typeof TabsPrimitives.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitives.Trigger
    ref={ref}
    className={cx(
      "ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex cursor-pointer items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none data-[state=active]:shadow-sm",
      "hover:not-disabled:not-data-[state=active]:bg-background/40 disabled:cursor-not-allowed disabled:opacity-50",
      "transition-colors duration-300",
      className
    )}
    {...props}
  />
))

TabTrigger.displayName = "TabTrigger"

const TabContent = forwardRef<
  ComponentRef<typeof TabsPrimitives.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitives.Content ref={ref} className={cx(className)} {...props} />
))

TabContent.displayName = "TabContent"

export { Tabs, TabTrigger, TabContent, TabList }
