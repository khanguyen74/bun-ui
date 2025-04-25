import { Alert, AlertDescription, AlertTitle } from "@bun-ui/react"

export const AlertVariants = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your action was completed successfully.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Be careful with this action. It&apos;s irreversible.
        </AlertDescription>
      </Alert>

      <Alert variant="error">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again.
        </AlertDescription>
      </Alert>
    </div>
  )
}
