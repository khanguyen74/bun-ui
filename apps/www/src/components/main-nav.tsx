import Link from "next/link"
import Logo from "@/icons/logo.svg"

import { version } from "../../../../packages/react/package.json"

export function MainNav() {
  return (
    <div className="hidden items-center lg:flex">
      <Link href="/" className="flex items-center gap-2 px-2">
        <Logo width={42} height={42} />
        <span className="hidden font-mono text-sm font-bold lg:inline-block">
          Bun UI
        </span>
      </Link>
      <span className="bg-accent/30 text-accent-foreground rounded-md p-2 text-xs font-medium select-none">
        v{version} Beta
      </span>
    </div>
  )
}
