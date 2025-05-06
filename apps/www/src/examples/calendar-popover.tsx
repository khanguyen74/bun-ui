"use client"

import { useState } from "react"
import { Button, Popover, PopoverContent, PopoverTrigger } from "@bun-ui/react"
import { Calendar } from "@bun-ui/react/calendar"
import { format } from "date-fns"
import { CalendarDays } from "lucide-react"

export const CalendarPopover = () => {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [open, setOpen] = useState(false)
  const handleDateChange = (date?: Date) => {
    setSelectedDate(date)
    setOpen(false)
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outlined" color="neutral" className="w-40">
          <CalendarDays />
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
