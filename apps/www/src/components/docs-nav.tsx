"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cx } from "@bun-ui/react"

import { DocsConfig, SideBarNavItem } from "@/config/docs"

interface DocsNavProps {
  config: DocsConfig
}
export const DocsNav = ({ config }: DocsNavProps) => {
  const pathname = usePathname()
  const items = config.sideBarNavs

  return items.length ? (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className="rounded-md px-2 py-1 text-sm font-medium">
            {item.title}{" "}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none font-normal text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </h4>
          {item?.items?.length && (
            <DocsNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : (
    <></>
  )
}

const DocsNavItems = ({
  items,
  pathname,
}: {
  items: SideBarNavItem[]
  pathname: string | null
}) => {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
      {items.map((item, index) =>
        item.url && !item.disabled ? (
          <Link
            key={index}
            href={item.url}
            className={cx(
              "group hover:bg-accent/30 hover:text-accent-foreground relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.url
                ? "bg-accent text-accent-foreground font-medium"
                : "text-foreground font-normal"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cx(
              "text-muted-foreground flex w-full cursor-not-allowed items-center rounded-md p-2 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {item.label && (
              <span className="bg-muted text-muted-foreground ml-2 rounded-md px-1.5 py-0.5 text-xs leading-none no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null
}
