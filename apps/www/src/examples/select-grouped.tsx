import { Select, SelectGroup, SelectItem, SelectLabel } from "@bun-ui/react"

export function SelectGrouped() {
  return (
    <Select placeholder="Choose your stack" label="Technology Stack">
      <SelectGroup>
        <SelectLabel>Frontend</SelectLabel>
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="svelte">Svelte</SelectItem>
      </SelectGroup>
      <SelectGroup>
        <SelectLabel>Backend</SelectLabel>
        <SelectItem value="node">Node.js</SelectItem>
        <SelectItem value="django">Django</SelectItem>
        <SelectItem value="laravel">Laravel</SelectItem>
      </SelectGroup>
    </Select>
  )
}
