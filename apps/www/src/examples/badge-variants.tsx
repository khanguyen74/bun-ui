import { Badge } from "@bun-ui/react"

export const BadgeVariants = () => (
  <div className="flex space-x-2">
    <Badge>Filled</Badge>
    <Badge variant="outlined">Outlined</Badge>
  </div>
)
