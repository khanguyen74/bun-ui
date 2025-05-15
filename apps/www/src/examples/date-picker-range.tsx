"use client"

import { useState } from "react"
import { Button, Popover, PopoverContent, PopoverTrigger } from "@bun-ui/react"
import { Calendar } from "@bun-ui/react/calendar"
import type { DateRange } from "@bun-ui/react/calendar"
import { format } from "date-fns"
import { CalendarDays } from "lucide-react"

export const DatePickerRange = () => {
  const [dateRange, setDateRange] = useState<DateRange>()
  const [open, setOpen] = useState(false)

  const handleDateChange = (range?: DateRange) => {
    setDateRange(range)
    if (range?.to) {
      setOpen(false)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outlined" color="neutral" className="w-64">
          <CalendarDays className="mr-2 h-4 w-4" />
          {dateRange?.from && dateRange.to ? (
            <>
              {format(dateRange.from, "MM/dd/yyyy")} -{" "}
              {format(dateRange.to, "MM/dd/yyyy")}
            </>
          ) : (
            "Select date range"
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          min={1}
          mode="range"
          onSelect={handleDateChange}
          selected={dateRange}
        />
      </PopoverContent>
    </Popover>
  )
}
