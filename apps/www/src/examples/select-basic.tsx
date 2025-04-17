import { Select, SelectItem } from "@bun-ui/react"

export function SelectBasic() {
  return (
    <Select
      placeholder="Select an option"
      menuPosition="popper"
      label="Choose a programming language"
    >
      <SelectItem value="js">JavaScript</SelectItem>
      <SelectItem value="py">Python</SelectItem>
      <SelectItem value="go">Go</SelectItem>
    </Select>
  )
}
