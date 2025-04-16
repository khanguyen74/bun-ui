import { Button } from "@bun-ui/react"
import { IceCreamCone } from "lucide-react"

export const ButtonSizes = () => {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <IceCreamCone />
      </Button>
    </div>
  )
}
