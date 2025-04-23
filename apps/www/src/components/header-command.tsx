"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Button,
  CommandMenu,
  CommandMenuEmpty,
  CommandMenuGroup,
  CommandMenuInput,
  CommandMenuItem,
  CommandMenuList,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@bun-ui/react"
import { File, Puzzle, Search } from "lucide-react"

import { SideBarNavItem, sideBarNavs } from "@/config/docs"
import { docs } from "../.velite"

export const HeaderCommand = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])
  const handleOpen = () => {
    setOpen(true)
  }

  const handleSelectUrl = (url: string) => {
    return () => router.push(url)
  }

  const runCommand = (command: () => unknown) => {
    setOpen(false)
    command()
  }

  const renderIcon = (url: string) => {
    if (url.includes("components")) {
      return <Puzzle />
    } else return <File />
  }
  const contentResults = useMemo(() => {
    const searchValue = value.toLowerCase()
    return docs.filter((doc) => {
      if (!searchValue) return true
      const title = doc.title.toLowerCase() || ""
      const description = doc.description?.toLowerCase() || ""
      return (
        title.includes(searchValue) ||
        doc.links?.source?.toLowerCase().includes(searchValue) ||
        description.includes(searchValue)
      )
    })
  }, [value])

  const navItems = useMemo<SideBarNavItem[]>(() => {
    if (!value) return sideBarNavs
    const navs: SideBarNavItem[] = []
    const matchingUrls = new Set(contentResults.map((item) => item.links.docs))
    sideBarNavs.forEach((nav) => {
      const matchedItems = nav.items.filter((item) => {
        return matchingUrls.has(item.url)
      })
      if (matchedItems.length > 0) {
        navs.push({
          title: nav.title,
          items: matchedItems,
        })
      }
    })
    return navs
  }, [contentResults, value])

  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg-muted/50 text-muted-foreground group relative h-8 w-fit justify-start rounded-lg px-1 text-sm font-normal shadow-none hover:not-disabled:bg-inherit dark:hover:not-disabled:bg-inherit"
        variant="outline"
      >
        <Search className="h-4 w-4 transition-colors duration-150 group-hover:text-black sm:flex dark:group-hover:text-white" />
        <kbd className="bg-muted pointer-events-none hidden items-center gap-1 rounded border px-1.5 font-sans text-xs font-medium opacity-100 transition-colors duration-150 select-none group-hover:text-black sm:flex dark:group-hover:text-white">
          <span className="hidden [.os-macos_&]:block">⌘K</span>
          <span className="hidden not-[.os-macos_&]:block">Ctrl&apos;K</span>
        </kbd>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogContent>
          <CommandMenu
            className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
            shouldFilter={false}
          >
            <CommandMenuInput
              placeholder="Search..."
              value={value}
              onValueChange={setValue}
              className="w-lg"
            />
            <CommandMenuList>
              <CommandMenuEmpty>No results</CommandMenuEmpty>
              {navItems.map((nav) => (
                <CommandMenuGroup heading={nav.title} key={nav.title}>
                  {nav.items.map((item) => {
                    return (
                      <CommandMenuItem
                        key={item.title}
                        value={item.title}
                        onSelect={() => {
                          runCommand(handleSelectUrl(item.url as string))
                        }}
                      >
                        {renderIcon(item.url as string)}
                        {item.title}
                      </CommandMenuItem>
                    )
                  })}
                </CommandMenuGroup>
              ))}
            </CommandMenuList>
          </CommandMenu>
        </DialogContent>
      </Dialog>
    </>
  )
}
