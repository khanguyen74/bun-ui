"use client"

import { Pagination, PaginationItem } from "@bun-ui/react"

import { cx } from "@/lib/classnames"

export const PaginationCustomRender = () => {
  return (
    <Pagination
      count={10}
      showFirstButton
      showLastButton
      renderItem={(item) => {
        if (item.type === "page") {
          const { type, page, ...props } = item
          return (
            <div
              {...props}
              className={cx(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors",
                item.selected
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted cursor-pointer",
                item.disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {page}
            </div>
          )
        }

        // Custom navigation buttons
        if (
          item.type === "previous" ||
          item.type === "next" ||
          item.type === "first" ||
          item.type === "last"
        ) {
          const { type, ...props } = item
          return (
            <div
              {...props}
              className={cx(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors",
                "hover:bg-muted cursor-pointer",
                item.disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {type === "previous" && "←"}
              {type === "next" && "→"}
              {type === "first" && "⟪"}
              {type === "last" && "⟫"}
            </div>
          )
        }

        // Custom ellipsis
        if (item.type === "start-ellipsis" || item.type === "end-ellipsis") {
          return (
            <div className="text-muted-foreground flex h-8 w-8 items-center justify-center text-sm">
              ...
            </div>
          )
        }

        return <PaginationItem {...item} />
      }}
    />
  )
}
