import NextLink from "next/link"
import { Button } from "@bun-ui/react"

import { siteConfig } from "@/config/site"
import GithubIcon from "../icons/github-mark-white.svg"
import GithubIconDark from "../icons/github-mark.svg"
import { HeaderCommand } from "./header-command"
import { MobileNav } from "./mobile-nav"
import ThemeSwitch from "./theme-switch"

export const SiteHeader = () => {
  return (
    <header className="bg-background/90 sticky top-0 z-50 h-[var(--header-height)] w-full border-b">
      <div className="flex h-14 items-center gap-2 px-4">
        <MobileNav />
        <div className="ml-auto flex flex-1 grow items-center justify-end gap-3">
          <HeaderCommand />
          <div className="flex items-center gap-2">
            <Button size="icon" variant="text" asChild>
              <NextLink href={siteConfig.links.github} target="_blank">
                <span className="hidden dark:block">
                  <GithubIcon viewBox="0 0 96 96" />
                </span>
                <span className="hidden not-dark:block">
                  <GithubIconDark viewBox="0 0 96 96" />
                </span>
              </NextLink>
            </Button>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  )
}
