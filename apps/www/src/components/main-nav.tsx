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
      <span className="bg-popover text-accent-foreground flex items-center gap-1 rounded-lg p-2 text-xs font-medium select-none">
        <span className="text-foreground text-sm font-medium">v{version}</span>
        <span className="text-destructive scale-90">Beta</span>
      </span>
    </div>
  )
}
