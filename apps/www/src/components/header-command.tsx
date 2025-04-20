"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Button,
  CommandMenuDialog,
  CommandMenuEmpty,
  CommandMenuGroup,
  CommandMenuInput,
  CommandMenuItem,
  CommandMenuList,
} from "@bun-ui/react"
import { File, Puzzle } from "lucide-react"

import { sideBarNavs } from "@/config/docs"

export const HeaderCommand = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const router = useRouter()

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

  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg-muted/50 text-muted-foreground relative h-8 w-full justify-start rounded-[0.5rem] text-sm font-normal shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
        variant="outline"
      >
        <span className="hidden lg:inline-flex">Search document...</span>
        <span className="inline-fliex lg:hidden">Search... </span>
        <kbd className="bg-muted pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
          <span>⌘</span>K
        </kbd>
      </Button>
      <CommandMenuDialog open={open} onOpenChange={setOpen}>
        <CommandMenuInput
          placeholder="Search..."
          value={value}
          onValueChange={setValue}
          className="w-lg"
        />
        <CommandMenuList>
          <CommandMenuEmpty>No results</CommandMenuEmpty>
          {sideBarNavs.map((nav) => (
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
      </CommandMenuDialog>
    </>
  )
}
