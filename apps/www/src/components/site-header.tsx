import NextLink from "next/link"
import { Button } from "@bun-ui/react"

import { siteConfig } from "@/config/site"
import GithubIcon from "../icons/github-mark-white.svg"
import GithubIconDark from "../icons/github-mark.svg"
import ThemeSwitch from "./theme-switch"

export const SiteHeader = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container-wrapper">
        <div className="container flex items-center justify-between">
          <div>Bun UI</div>
          <div className="flex items-center gap-2">
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
    </header>
  )
}
