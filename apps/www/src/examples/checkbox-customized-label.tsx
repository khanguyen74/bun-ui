import NextLink from "next/link"
import { Checkbox, Label } from "@bun-ui/react"

export const CheckboxCustomizedLabel = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Checkbox id="updates" />
      <Label htmlFor="updates" className="text-muted-foreground text-sm">
        Accept{" "}
        <NextLink href="#" className="text-blue-500 underline">
          terms and conditions
        </NextLink>
      </Label>
    </div>
  )
}
