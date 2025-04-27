import Link from "next/link"
import Logo from "@/icons/logo.svg"

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Logo width={42} height={42} />
        <span className="hidden font-mono text-lg font-bold lg:inline-block">
          Bun UI
        </span>
      </Link>
    </div>
  )
}
