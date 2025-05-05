"use client"

import { useState } from "react"
import { Calendar } from "@bun-ui/react/calendar"
import { format } from "date-fns"

export const CalendarControlled = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col gap-5">
      <Calendar
        selected={selectedDate}
        mode="single"
        onSelect={setSelectedDate}
      />
      {selectedDate && <p>Selected {format(selectedDate, "MM/dd/yyyy")}</p>}
    </div>
  )
}
