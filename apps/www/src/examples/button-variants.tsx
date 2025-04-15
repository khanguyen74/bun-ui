import { Button } from "@bun-ui/react"

export const ButtonVariants = () => {
  return (
    <div className="flex gap-4">
      <Button onClick={() => {}}>Default</Button>
      <Button onClick={() => {}} variant="secondary">
        Secondary
      </Button>
      <Button onClick={() => {}} variant="outline">
        Outline
      </Button>
      <Button onClick={() => {}} variant="link">
        Link
      </Button>
      <Button onClick={() => {}} variant="destructive">
        Destructive
      </Button>
    </div>
  )
}
