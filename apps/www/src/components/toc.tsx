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
    <aside id="toc" className="hidden xl:block">
      <div
        className={cx(
          "sticky top-20 -mt-6 w-[16rem] pt-6 text-sm",
          // TODO: Remove these class when warning alert at top of all pages is removed
          "top-25 mt-3"
        )}
      >
        <p className="font-semibold text-gray-900 dark:text-white">
          On this page
        </p>
        <div className="mt-3 flex flex-col space-y-2">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              data-toc
              id={item.url}
              aria-current={item.url === activeItem ? "page" : undefined}
              className={`text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white ${item.url === activeItem ? "font-medium text-gray-900 dark:text-white" : ""} `}
              style={{ marginLeft: `calc(1rem * ${item.depth})` }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
