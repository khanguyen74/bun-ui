import { Avatar, AvatarFallback, AvatarImage } from "@bun-ui/react"

export const AvatarFallbackExample = () => (
  <Avatar>
    <AvatarImage src="/non-exist.png" />
    <AvatarFallback>B</AvatarFallback>
  </Avatar>
)
