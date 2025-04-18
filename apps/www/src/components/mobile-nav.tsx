"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import {
  Button,
  cx,
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@bun-ui/react"

import { docsConfig } from "@/config/docs"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  const onOpenChange = React.useCallback((open: boolean) => {
    setOpen(open)
  }, [])

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 gap-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="!size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80svh] p-0">
        <DrawerTitle className="sr-only">Mobile Navigation Drawer</DrawerTitle>
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-2">
            {docsConfig.sideBarNavs.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 pt-6">
                <h4 className="text-xl font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.url}>
                      {!item.disabled &&
                        (item.url ? (
                          <MobileLink
                            href={item.url}
                            onOpenChange={setOpen}
                            className="opacity-80"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cx("text-[1.15rem]", className)}
      {...props}
    >
      {children}
    </Link>
  )
}
