"use client"

import React, { useState } from "react"
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  type Placement,
} from "@floating-ui/react"

import { cx } from "../../lib"

interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "content"> {
  className?: string
  /**
   * The content of the tooltip.
   **/
  content: React.ReactNode
  /**
   * The delay before the tooltip appears, in milliseconds.
   * @default 500
   **/
  openDelay?: number

  /**
   * The delay before the tooltip disappears, in milliseconds.
   * @default 0
   **/
  closeDelay?: number
  /**
   * The placement of the tooltip.
   * @default "top"
   **/
  placement?: Placement
  /**
   * Whether to show the tooltip on click instead of hover.
   * @default false
   **/
  clickOnly?: boolean
  /**
   * Whether to show the tooltip on focus.
   * @default true
   **/
  focusable?: boolean
}

const Tooltip = ({
  content,
  children,
  placement = "top",
  openDelay = 500,
  closeDelay = 0,
  clickOnly = false,
  focusable = true,
  className,
  ...props
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(5), flip(), shift({ padding: 5 })],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, {
    delay: {
      open: openDelay,
      close: closeDelay,
    },
    enabled: !clickOnly,
  })

  const focus = useFocus(context, {
    enabled: focusable,
  })

  const dismiss = useDismiss(context)
  const role = useRole(context)

  const click = useClick(context, {
    enabled: clickOnly,
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
    click,
  ])

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      <FloatingPortal>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={cx(
              "bg-popover text-popover-foreground z-50 rounded-md p-2 text-sm shadow-md",
              className
            )}
            {...getFloatingProps()}
            {...props}
          >
            {content}
          </div>
        )}
      </FloatingPortal>
    </>
  )
}

export { Tooltip }
