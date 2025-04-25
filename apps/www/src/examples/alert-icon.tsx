import { Alert, AlertDescription, AlertTitle } from "@bun-ui/react"
import { Flame } from "lucide-react"

export const AlertIcon = () => {
  return (
    <Alert icon={<Flame className="h-4 w-4 text-red-500" />}>
      <AlertTitle>Hot Tip!</AlertTitle>
      <AlertDescription>
        You can refresh your dev server with `rs` in many CLIs. Pretty slick,
        huh?
      </AlertDescription>
    </Alert>
  )
}
