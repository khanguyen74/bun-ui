import { Button } from "@bun-ui/react"

export const ButtonDisabled = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Button disabled>Default</Button>
      <Button disabled color="secondary">
        Secondary
      </Button>
      <Button disabled variant="outlined">
        Outlined
      </Button>
      <Button disabled variant="text">
        Text
      </Button>
      <Button disabled color="destructive">
        Destructive
      </Button>
    </div>
  )
}
