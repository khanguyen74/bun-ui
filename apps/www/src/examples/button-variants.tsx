import { Button } from "@bun-ui/react"

export const ButtonVariants = () => {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}
