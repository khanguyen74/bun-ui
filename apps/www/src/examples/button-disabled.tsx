import { Button } from "@bun-ui/react"

export const ButtonDisabled = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Button disabled>Default</Button>
      <Button disabled variant="secondary">
        Secondary
      </Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="link">
        <a href="#">Link</a>
      </Button>
      <Button disabled variant="destructive">
        Destructive
      </Button>
    </div>
  )
}
