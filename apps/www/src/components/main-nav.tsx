import Link from "next/link"
import Logo from "@/icons/logo.svg"

import { VersionBadge } from "./version-badge"

export function MainNav() {
  return (
    <div className="hidden items-center gap-2 lg:flex">
      <Link href="/" className="flex items-center gap-2 px-2">
        <Logo width={42} height={42} />
        <span className="hidden font-mono text-sm font-bold lg:inline-block">
          Bun UI
        </span>
      </Link>
      <VersionBadge />
    </div>
  )
}
