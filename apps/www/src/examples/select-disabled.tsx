import { Select, SelectItem } from "@bun-ui/react"

export function SelectDisabled() {
  return (
    <div className="flex gap-x-5">
      <Select
        disabled
        placeholder="Select an option"
        menuPosition="popper"
        label="Disabled Select"
      >
        <SelectItem value="one">Option One</SelectItem>
        <SelectItem value="two">Option Two</SelectItem>
      </Select>
      <Select
        placeholder="Choose a plan"
        menuPosition="popper"
        label="Subscription Plan"
      >
        <SelectItem value="free">Free</SelectItem>
        <SelectItem value="pro">Pro</SelectItem>
        <SelectItem value="enterprise" disabled>
          Enterprise (Contact Sales)
        </SelectItem>
      </Select>
    </div>
  )
}
