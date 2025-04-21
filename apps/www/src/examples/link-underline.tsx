import { Link } from "@bun-ui/react"

export const LinkUnderline = () => (
  <div className="flex gap-4">
    <Link href="#">Always</Link>
    <Link href="#" underline="hover">
      Hover
    </Link>
    <Link href="#" underline="none">
      No underline
    </Link>
  </div>
)
