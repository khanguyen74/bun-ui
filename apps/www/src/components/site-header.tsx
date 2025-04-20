import NextLink from "next/link"
import { Button } from "@bun-ui/react"

import { siteConfig } from "@/config/site"
import GithubIcon from "../icons/github-mark-white.svg"
import GithubIconDark from "../icons/github-mark.svg"
import { HeaderCommand } from "./header-command"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import ThemeSwitch from "./theme-switch"

export const SiteHeader = () => {
  return (
    <header className="bg-background sticky top-0 z-50 h-14 w-full border-b">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2">
          <div>
            <MainNav />
            <MobileNav />
          </div>
          <div className="ml-auto flex grow items-center gap-2 md:flex-1 md:grow-0 md:justify-end">
            <div className="w-full flex-1 md:flex md:w-auto md:flex-none">
              <HeaderCommand />
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <Button size="icon" variant="ghost" asChild>
                <NextLink href={siteConfig.links.github} target="_blank">
                  <span className="hidden [html.dark_&]:block">
                    <GithubIcon viewBox="0 0 96 96" />
                  </span>
                  <span className="hidden [html.light_&]:block">
                    <GithubIconDark viewBox="0 0 96 96" />
                  </span>
                </NextLink>
              </Button>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
