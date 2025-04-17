import { Input, Label } from "@bun-ui/react"

export const InputCustomized = () => (
  <div className="space-y-2">
    <Label
      htmlFor="custom"
      className="text-sm font-semibold tracking-wide text-pink-600 uppercase"
    >
      Your Cool Name
    </Label>
    <Input
      id="custom"
      placeholder="Type here..."
      className="rounded-xl border-2 border-pink-500 px-4 py-2 text-pink-700 placeholder-pink-300 shadow-sm focus:border-pink-600 focus:ring-2 focus:ring-pink-300"
    />
  </div>
)
