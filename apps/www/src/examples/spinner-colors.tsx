import { Spinner } from "@bun-ui/react"

export const SpinnerColors = () => (
  <div className="flex gap-4">
    <Spinner color="info" />
    <Spinner color="primary" />
    <Spinner color="secondary" />
    <Spinner color="destructive" />
    <Spinner color="accent" />
  </div>
)
