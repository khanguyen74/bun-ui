import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@bun-ui/react"
import { CalendarDays } from "lucide-react"

export const DatePickerBasic = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outlined" color="neutral" className="w-40">
          <CalendarDays className="mr-2 h-4 w-4" />
          Select a date
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar mode="single" />
      </PopoverContent>
    </Popover>
  )
}
