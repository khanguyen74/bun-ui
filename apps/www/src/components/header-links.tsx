"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"

import { cx } from "@/lib/classnames"

export const HeaderLinks = () => {
  const currentPath = usePathname()
  return (
    <nav className="text-foreground/60 hidden gap-x-6 text-sm sm:flex">
      <NextLink
        href="/docs"
        className={cx(currentPath.startsWith("/docs") && "text-foreground")}
      >
        Docs
      </NextLink>
      <NextLink
        href="/components"
        className={cx(
          currentPath.startsWith("/components") && "text-foreground"
        )}
      >
        Components
      </NextLink>
      <NextLink
        href="/blog"
        className={cx(currentPath.startsWith("/blog") && "text-foreground")}
      >
        Blog
      </NextLink>
    </nav>
  )
}
