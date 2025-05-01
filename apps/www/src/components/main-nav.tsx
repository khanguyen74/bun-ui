import Link from "next/link"
import Logo from "@/icons/logo.svg"

export function MainNav() {
  return (
    <Link href="/" className="flex items-center gap-2 px-2">
      <Logo width={42} height={42} />
      <span className="hidden font-mono text-lg font-bold lg:inline-block">
        Bun UI
      </span>
    </Link>
  )
}
