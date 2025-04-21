import NextLink from "next/link"
import { Link } from "@bun-ui/react"

export const LinkCustomized = () => (
  <Link asChild>
    <NextLink href="/">Visit</NextLink>
  </Link>
)
