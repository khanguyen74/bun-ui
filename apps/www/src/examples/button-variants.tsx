import { Button, Link } from "@bun-ui/react"

export const ButtonVariants = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
      <Button variant="link" asChild>
        <Link href="#">Link</Link>
      </Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}
