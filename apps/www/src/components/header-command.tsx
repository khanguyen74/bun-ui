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

// Helper function to get text snippet around the match
const getTextSnippet = (
  text: string,
  searchValue: string,
  snippetLength = 50
) => {
  if (!text || !searchValue) return null
  const index = text.toLowerCase().indexOf(searchValue.toLowerCase())
  if (index === -1) return null

  const start = Math.max(0, index - snippetLength)
  const end = Math.min(text.length, index + searchValue.length + snippetLength)
  let snippet = text.slice(start, end)

  // Add ellipsis if we're not at the start/end
  if (start > 0) snippet = "..." + snippet
  if (end < text.length) snippet = snippet + "..."

  return snippet
}

// Helper function to highlight matching text
const highlightMatch = (text: string, searchValue: string) => {
  if (!text || !searchValue) return text
  const regex = new RegExp(`(${searchValue})`, "gi")
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-primary/20">
        {part}
      </mark>
    ) : (
      part
    )
  )
}

export const HeaderCommand = () => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [selectedValue, setSelectedValue] = useState("")
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

  const handleSelectUrl = (url: string, isExternal = false) => {
    setOpen(false)
    if (isExternal) {
      const { protocol, hostname, port } = window.location
      const docUrl = `${protocol}//${hostname}${port ? `:${port}` : ""}${url}`
      window.open(docUrl, "_blank")
    } else {
      router.push(url)
    }
  }

  const handleCommandMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.metaKey) {
      if (e.key === "Enter") {
        e.preventDefault()
        handleSelectUrl(selectedValue, true)
      }
    }
  }

  const renderIcon = (url: string) => {
    if (url.includes("components")) {
      return <Puzzle />
    } else return <File />
  }

  const contentResults = useMemo(() => {
    const searchValue = inputValue.toLowerCase()
    return docs
      .filter((doc) => {
        if (!searchValue) return true
        const title = doc.title.toLowerCase() || ""
        const description = doc.description?.toLowerCase() || ""

        // Get all toc items and their nested items
        const tocItems =
          doc.toc?.flatMap((item) => [
            item.title,
            ...(item.items?.map((subItem) => subItem.title) || []),
          ]) || []
        const tocText = tocItems.join(" ").toLowerCase()

        return (
          title.includes(searchValue) ||
          description.includes(searchValue) ||
          tocText.includes(searchValue)
        )
      })
      .map((doc) => {
        // Only get snippets if there's a search value
        if (!inputValue) {
          return {
            ...doc,
            matchSnippet: null,
          }
        }

        // Try to find a match in description first
        const descriptionMatch = getTextSnippet(
          doc.description || "",
          inputValue
        )

        // Find matching TOC items
        const matchingTocItems =
          doc.toc?.flatMap((item) => {
            const matches = []
            if (item.title.toLowerCase().includes(inputValue.toLowerCase())) {
              matches.push(item.title)
            }
            const matchingSubItems = item.items?.filter((subItem) =>
              subItem.title.toLowerCase().includes(inputValue.toLowerCase())
            )
            if (matchingSubItems?.length) {
              matches.push(...matchingSubItems.map((subItem) => subItem.title))
            }
            return matches
          }) || []

        // If we have matching TOC items, use the first one
        const tocMatch =
          matchingTocItems.length > 0 ? matchingTocItems[0] : null

        return {
          ...doc,
          matchSnippet: descriptionMatch || tocMatch,
        }
      })
  }, [inputValue])

  const navItems = useMemo<SideBarNavItem[]>(() => {
    if (!inputValue) return sideBarNavs
    const navs: SideBarNavItem[] = []
    const matchingUrls = new Set(contentResults.map((item) => item.links.docs))
    sideBarNavs.forEach((nav) => {
      const matchedItems = nav.items.filter((item) => {
        if (!item.url) return false
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
  }, [contentResults, inputValue])

  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg-muted/50 text-muted-foreground group hover:[&_*]:text-foreground relative h-8 w-fit justify-start rounded-lg px-1 text-sm font-normal shadow-none hover:not-disabled:bg-inherit dark:hover:not-disabled:bg-inherit [&_*]:transition-colors [&_*]:duration-150"
        variant="outlined"
      >
        <Search className="h-4 w-4 group-hover:text-black sm:flex dark:group-hover:text-white" />
        <span className="mr-4 hidden sm:inline-flex">Search...</span>
        <kbd className="bg-muted pointer-events-none hidden items-center gap-1 rounded border px-1.5 font-sans text-xs font-medium opacity-100 select-none sm:flex">
          <span className="hidden [.os-macos_&]:block">⌘K</span>
          <span className="hidden not-[.os-macos_&]:block">Ctrl&apos;K</span>
        </kbd>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogContent className="p-0 lg:max-w-3xl">
          <CommandMenu
            className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
            shouldFilter={false}
            onKeyDown={handleCommandMenuKeyDown}
            value={selectedValue}
            onValueChange={setSelectedValue}
          >
            <CommandMenuInput
              placeholder="Search..."
              value={inputValue}
              onValueChange={setInputValue}
              className="w-lg"
            />
            <CommandMenuList className="max-h-[30rem] lg:max-h-[40rem]">
              <CommandMenuEmpty>No results</CommandMenuEmpty>
              {navItems.map((nav) => (
                <CommandMenuGroup heading={nav.title} key={nav.title}>
                  {nav.items.map((item) => {
                    const doc = contentResults.find(
                      (d) => d.links.docs === item.url
                    )
                    return (
                      <CommandMenuItem
                        key={item.title}
                        value={item.url}
                        onSelect={() => handleSelectUrl(item.url as string)}
                      >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            {renderIcon(item.url as string)}
                            <span>{item.title}</span>
                          </div>
                          {doc?.matchSnippet && (
                            <p className="text-muted-foreground text-xs">
                              {highlightMatch(doc.matchSnippet, inputValue)}
                            </p>
                          )}
                        </div>
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
