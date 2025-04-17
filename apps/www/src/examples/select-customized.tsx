import { Select, SelectItem } from "@bun-ui/react"
import { Apple, Banana } from "lucide-react"

export function SelectCustomized() {
  return (
    <Select
      placeholder="Pick your favorite"
      menuPosition="popper"
      label="Custom Styled Select"
    >
      <SelectItem value="apple">
        <div className="flex items-center gap-2">
          <Apple className="h-4 w-4 text-red-500" />
          Apple
        </div>
      </SelectItem>
      <SelectItem
        value="banana"
        selectItemTextClassName="flex items-center gap-2"
      >
        <div className="flex items-center gap-2">
          <Banana className="h-4 w-4 text-yellow-500" />
          Banana
        </div>
      </SelectItem>
    </Select>
  )
}
