import { Spinner } from "@bun-ui/react"

export const SpinnerSizes = () => (
  <div className="flex items-center gap-4">
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
  </div>
)
