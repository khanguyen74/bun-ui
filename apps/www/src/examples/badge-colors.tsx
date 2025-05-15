import { Badge } from "@bun-ui/react"

export const BadgeColors = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="accent">Accent</Badge>
      <Badge color="neutral">Neutral</Badge>
      <Badge color="destructive">Destructive</Badge>
    </div>
  )
}
