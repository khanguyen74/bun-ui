"use client"

import { useEffect } from "react"
import Link from "next/link"

// import { scrollIntoView } from "@/app/docs/scroll-into-view"

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

  useEffect(() => {
    const activeLink = document.querySelector("[data-toc][aria-current='page']")
    const toc = document.getElementById("toc")
    if (toc && activeLink) {
      // scrollIntoView(toc, activeLink as HTMLElement, 120)
    }
  }, [activeItem])

  if (!items.length) return <div />

  return (
    <aside id="toc" className="sticky top-10 h-[90vh] w-[16rem] text-sm">
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
    </aside>
  )
}
