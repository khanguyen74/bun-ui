import Link from "next/link"

import { GithubIcon } from "./icons"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href="https://github.com/bunui-kit"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Bun UI Team
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/bunui-kit/bun-ui"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/bunui-kit/bun-ui"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/80 hover:text-foreground"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
