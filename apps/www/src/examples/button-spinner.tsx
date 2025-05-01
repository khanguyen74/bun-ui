import { Button, Spinner } from "@bun-ui/react"

export const ButtonSpinner = () => {
  return (
    <Button>
      <Spinner size="sm" color="current" />
      Loading...
    </Button>
  )
}
