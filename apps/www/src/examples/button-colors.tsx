import { Button } from "@bun-ui/react"

export const ButtonColors = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Button color="primary" variant="text">
        Primary
      </Button>
      <Button color="secondary">Secondary</Button>
      <Button color="destructive" variant="outlined">
        Destructive
      </Button>
      <Button color="neutral">Neutral</Button>
      <Button color="accent">Accent</Button>
    </div>
  )
}
