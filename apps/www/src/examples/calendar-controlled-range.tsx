"use client"

import { useState } from "react"
import { Calendar, DateRange } from "@bun-ui/react/calendar"
import { format } from "date-fns"

export const CalendarControlledRange = () => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  })

  return (
    <div className="flex flex-col gap-5">
      <Calendar
        selected={selectedRange}
        mode="range"
        onSelect={setSelectedRange}
      />
      {selectedRange?.from && selectedRange.to && (
        <p>
          Selected from {format(selectedRange.from, "MM/dd/yyyy")} to{" "}
          {format(selectedRange.to, "MM/dd/yyyy")}
        </p>
      )}
    </div>
  )
}
