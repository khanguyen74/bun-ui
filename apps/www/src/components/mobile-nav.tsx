"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import Logo from "@/icons/logo.svg"
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@bun-ui/react"
import { Menu } from "lucide-react"

import { docsConfig } from "@/config/docs"
import { cx } from "@/lib/classnames"
import { VersionBadge } from "./version-badge"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  const onOpenChange = React.useCallback((open: boolean) => {
    setOpen(open)
  }, [])

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerTrigger asChild>
          <Button variant="text" className="h-8 w-8 text-base lg:hidden">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[80svh] p-0">
          <DrawerTitle className="sr-only">
            Mobile Navigation Drawer
          </DrawerTitle>
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
      <Link href="/">
        <Logo width={32} height={32} />
      </Link>
      <VersionBadge />
    </div>
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
