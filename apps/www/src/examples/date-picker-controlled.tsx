"use client"

import { useState } from "react"
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@bun-ui/react"
import { format } from "date-fns"
import { CalendarDays } from "lucide-react"

export const DatePickerBasic = () => {
  const [selectedDate, setSelectedDate] = useState<Date>()

  const handleDateChange = (date?: Date) => {
    setSelectedDate(date)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outlined" color="neutral" className="w-40">
          <CalendarDays className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, "MM/dd/yyyy") : "Select a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          onSelect={handleDateChange}
          selected={selectedDate}
        />
      </PopoverContent>
    </Popover>
  )
}
