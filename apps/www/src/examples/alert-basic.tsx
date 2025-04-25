import { Alert, AlertDescription, AlertTitle } from "@bun-ui/react"

export const AlertBasic = () => {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can customize this alert with different variants.
      </AlertDescription>
    </Alert>
  )
}
