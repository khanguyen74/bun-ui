import { Button, Checkbox, Input } from "@bun-ui/react"

export default function ComponentsPage() {
  return (
    <div className="flex flex-col space-y-10">
      <div>
        <p>Buttons:</p>
        <Button>Click me</Button>
      </div>
      <div>
        <p>Input with label:</p>
        <Input label="My input" className="w-80" />
      </div>
      <div>
        <p>Checkbox</p>
        <Checkbox defaultChecked label="My Checkbox" />
      </div>
    </div>
  )
}
