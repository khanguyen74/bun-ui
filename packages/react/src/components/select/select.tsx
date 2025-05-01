"use client"

import React from "react"
import * as SelectPrimitives from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"

import { cx } from "../../lib/utils"
import { Label } from "../label"

interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitives.Root> {
  placeholder?: React.ReactNode
  className?: string
  /**
   * The label for the select input.
   **/
  label?: React.ReactNode
  /**
   * The position of the menu. Default is "popper".
   **/
  menuPosition?: "item-aligned" | "popper"
}

const Select = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Root>,
  SelectProps
>(
  (
    {
      className,
      placeholder,
      children,
      value,
      menuPosition = "popper",
      label,
      ...props
    },
    ref
  ) => (
    <div className="flex flex-col gap-2">
      {label && <Label>{label}</Label>}
      <SelectPrimitives.Root value={value} {...props}>
        <SelectPrimitives.Trigger
          ref={ref}
          className={cx(
            "focus:ring-ring bg-background data-[placeholder]:text-muted-foreground border-input ring-offset-background flex h-10 w-full cursor-pointer items-center justify-between rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
        >
          <SelectPrimitives.Value placeholder={placeholder}>
            {value}
          </SelectPrimitives.Value>
          <SelectPrimitives.Icon>
            <ChevronDown className="h-4 w-4" />
          </SelectPrimitives.Icon>
        </SelectPrimitives.Trigger>

        <SelectPrimitives.Portal>
          <SelectPrimitives.Content
            position={menuPosition}
            className={cx(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
              menuPosition === "popper" &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
            )}
          >
            <SelectPrimitives.Viewport
              className={cx(
                "p-1",
                menuPosition === "popper" &&
                  "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
              )}
            >
              {children}
            </SelectPrimitives.Viewport>
          </SelectPrimitives.Content>
        </SelectPrimitives.Portal>
      </SelectPrimitives.Root>
    </div>
  )
)

export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item> {
  selectItemTextClassName?: string
}

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Item>,
  SelectItemProps
>(({ className, children, value, selectItemTextClassName, ...props }, ref) => (
  <SelectPrimitives.Item
    ref={ref}
    className={cx(
      "data-[highlighted]:bg-accent/40 data-[state=checked]:bg-accent relative flex w-full cursor-pointer items-center rounded-sm py-1 pr-2 pl-6 text-sm outline-none select-none",
      "data-[disabled]:text-muted-foreground data-[disabled]:cursor-not-allowed",
      className
    )}
    value={value}
    {...props}
  >
    <SelectPrimitives.ItemIndicator className="absolute left-1 flex items-center justify-center">
      <Check className="h-3 w-3" />
    </SelectPrimitives.ItemIndicator>
    <SelectPrimitives.ItemText className={cx(selectItemTextClassName)}>
      {children}
    </SelectPrimitives.ItemText>
  </SelectPrimitives.Item>
))

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitives.Label
    ref={ref}
    className={cx("py-1 pl-5 text-sm font-semibold", className)}
    {...props}
  />
))
const SelectGroup = SelectPrimitives.Group

export { Select, SelectItem, type SelectProps, SelectGroup, SelectLabel }
