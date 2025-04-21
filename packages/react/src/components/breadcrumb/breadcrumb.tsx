import React from "react"
import { ChevronRight } from "lucide-react"

import { cx } from "../../lib"
import { Link } from "../link"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav">
>((props, ref) => <nav ref={ref} aria-label="breadcrumbs" {...props} />)

interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {
  separator?: React.ReactNode | null
}
const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  (
    {
      className,
      separator = <ChevronRight className="h-4 w-4" />,
      children,
      ...props
    },
    ref
  ) => {
    const items = React.Children.toArray(children)
    let wrappedItems = items
    if (separator) {
      wrappedItems = items.flatMap((item, index) => {
        const isLastItem = index === items.length - 1
        return isLastItem
          ? [item]
          : [
              item,
              <li key={`separator-${index}`} className="text-primary/50 mx-1">
                {separator}
              </li>,
            ]
      })
    }
    return (
      <ol
        ref={ref}
        className={cx(
          "flex list-none flex-wrap items-center overflow-hidden",
          className
        )}
        {...props}
      >
        {wrappedItems}
      </ol>
    )
  }
)

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cx("inline-flex items-center", className)}
    {...props}
  />
))

interface BreadcrumbLinkProps extends React.ComponentProps<typeof Link> {
  currentLink?: boolean
}

const BreadcrumbLink = ({
  className,
  currentLink,
  ...props
}: BreadcrumbLinkProps) =>
  currentLink ? (
    <span className="text-primary cursor-default">{props.children}</span>
  ) : (
    <Link
      underline="hover"
      className={cx("text-primary/50 hover:decoration-primary/50", className)}
      {...props}
    />
  )

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink }
