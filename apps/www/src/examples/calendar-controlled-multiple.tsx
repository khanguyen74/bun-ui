"use client"

import { useState } from "react"
import { Calendar } from "@bun-ui/react/calendar"

export const CalendarControlledMultiple = () => {
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>()

  return (
    <div className="flex flex-col items-center gap-5">
      <Calendar
        mode="multiple"
        selected={selectedDates}
        onSelect={setSelectedDates}
      />
      <div>
        {selectedDates?.length ? (
          <p>
            Selected {selectedDates.length} date
            {selectedDates.length > 1 ? "s" : ""}:{" "}
            {selectedDates.map((date) => date.toLocaleDateString()).join(", ")}
          </p>
        ) : (
          <p>No dates selected</p>
        )}
      </div>
    </div>
  )
}
