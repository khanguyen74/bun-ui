import { Link } from "@bun-ui/react"

export const LinkColors = () => (
  <div className="flex flex-col gap-4 md:flex-row">
    <Link>primary</Link>
    <Link color="secondary">secondary</Link>
    <Link color="neutral">neutral</Link>
    <Link color="destructive">destructive</Link>
  </div>
)
