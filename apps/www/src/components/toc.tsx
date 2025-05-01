"use client"

import Link from "next/link"
import { cx } from "@bun-ui/react"

import { useScrollSpy } from "../lib/use-scroll-spy"

interface TocItem {
  title: React.ReactNode
  url: string
  depth: number
}

interface Props {
  items: TocItem[]
}

export const Toc = ({ items }: Props) => {
  const activeItem = useScrollSpy(items.map((entry) => entry.url))

  if (!items.length) return <div />

  return (
    <aside id="toc" className="col-span-2 hidden xl:block">
      <div
        className={cx(
          "bl sticky top-20 -mt-6 w-full pt-6 pl-10 text-sm",
          // TODO: Remove these class when warning alert at top of all pages is removed
          "top-25 mt-3"
        )}
      >
        <p className="text-muted-foreground font-semibold">On this page</p>
        <div className="mt-3 flex flex-col">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              data-toc
              id={item.url}
              aria-current={item.url === activeItem ? "page" : undefined}
              className={cx(
                "border-l py-1 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
                item.url === activeItem &&
                  "border-foreground font-medium text-gray-900 dark:text-white"
              )}
              style={{ paddingLeft: `calc(1rem * ${item.depth + 1})` }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
