"use client"

import React from "react"
import { DayPicker } from "react-day-picker"

type CalendarProps = React.ComponentPropsWithoutRef<typeof DayPicker>

const Calendar = ({ className, ...props }: CalendarProps) => (
  <DayPicker
    {...props}
    className={className}
    classNames={{ today: "bg-primary " }}
  />
)

export { Calendar, type CalendarProps }
