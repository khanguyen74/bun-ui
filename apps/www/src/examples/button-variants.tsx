import { Button, Link } from "@bun-ui/react"

export const ButtonVariants = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Button>Default</Button>
      <Button variant="outlined">Outline</Button>
      <Button variant="text">Text</Button>
      <Button asChild className="underline">
        <Link href="#">Link</Link>
      </Button>
    </div>
  )
}
