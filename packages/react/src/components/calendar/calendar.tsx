"use client"

import {
  DayPicker,
  useDayPicker,
  type DateRange,
  type DayPickerProps,
} from "react-day-picker"

import { cx } from "../../lib"
import { Button, buttonVariants } from "../button"
import { ChevronLeftIcon, ChevronRightIcon } from "../icons"

export type CalendarProps = DayPickerProps & {
  monthsClassName?: string
  monthCaptionClassName?: string
  weekdaysClassName?: string
  weekdayClassName?: string
  monthClassName?: string
  captionClassName?: string
  captionLabelClassName?: string
  buttonNextClassName?: string
  buttonPreviousClassName?: string
  navClassName?: string
  monthGridClassName?: string
  weekClassName?: string
  dayClassName?: string
  dayButtonClassName?: string
  rangeStartClassName?: string
  rangeEndClassName?: string
  selectedClassName?: string
  todayClassName?: string
  outsideClassName?: string
  disabledClassName?: string
  rangeMiddleClassName?: string
  hiddenClassName?: string
}

const Calendar = ({
  className,
  buttonNextClassName,
  buttonPreviousClassName,
  navClassName,
  ...props
}: CalendarProps) => {
  const { onNextClick, onPrevClick } = props
  const _monthsClassName = cx("relative flex", props.monthsClassName)
  const _monthCaptionClassName = cx(
    "relative mx-10 flex h-7 items-center justify-center",
    props.monthCaptionClassName
  )
  const _weekdaysClassName = cx("flex flex-row", props.weekdaysClassName)
  const _weekdayClassName = cx(
    "w-8 text-sm font-normal text-muted-foreground",
    props.weekdayClassName
  )
  const _monthClassName = cx("w-full", props.monthClassName)
  const _captionClassName = cx(
    "relative flex items-center justify-center pt-1",
    props.captionClassName
  )
  const _captionLabelClassName = cx(
    "truncate text-sm font-medium",
    props.captionLabelClassName
  )
  const _monthGridClassName = cx("mx-auto mt-4", props.monthGridClassName)
  const _weekClassName = cx("mt-2 flex w-max items-start", props.weekClassName)
  const _dayClassName = cx(
    "flex size-8 flex-1 items-center justify-center p-0 text-sm group",
    props.dayClassName
  )
  const _dayButtonClassName = cx(
    buttonVariants({ variant: "text", color: "neutral" }),
    "size-8 rounded-md p-0 font-normal transition-none aria-selected:opacity-100",
    "group-data-[selected=true]:hover:bg-primary/80 group-data-[selected=true]:border-none",
    props.dayButtonClassName
  )
  const buttonRangeClassName = cx("bg-primary/10 ")
  const _rangeStartClassName = cx(
    buttonRangeClassName,
    "day-range-start rounded-s-md",
    props.rangeStartClassName
  )
  const _rangeEndClassName = cx(
    buttonRangeClassName,
    "day-range-end rounded-e-md",
    props.rangeEndClassName
  )
  const _rangeMiddleClassName = cx(
    "[&>button]:bg-transparent bg-primary/10 [&>button]:!text-foreground [&>button]:hover:!bg-primary/20",
    props.rangeMiddleClassName
  )
  const _selectedClassName = cx(
    "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:text-primary-foreground",
    props.selectedClassName
  )
  const _todayClassName = cx(
    "[&>button]:text-foreground [&>button]:border [&>button]:border-foreground/60 ",
    props.todayClassName
  )
  const _outsideClassName = cx(
    "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
    props.outsideClassName
  )
  const _disabledClassName = cx(
    "text-muted-foreground opacity-50",
    props.disabledClassName
  )
  const _hiddenClassName = cx("invisible flex-1", props.hiddenClassName)

  return (
    <DayPicker
      style={{ width: "248px" }}
      mode="single"
      className={cx("p-3", className)}
      classNames={{
        months: _monthsClassName,
        month_caption: _monthCaptionClassName,
        weekdays: _weekdaysClassName,
        weekday: _weekdayClassName,
        month: _monthClassName,
        caption: _captionClassName,
        caption_label: _captionLabelClassName,
        month_grid: _monthGridClassName,
        week: _weekClassName,
        day: _dayClassName,
        day_button: _dayButtonClassName,
        range_start: _rangeStartClassName,
        range_middle: _rangeMiddleClassName,
        range_end: _rangeEndClassName,
        selected: _selectedClassName,
        today: _todayClassName,
        outside: _outsideClassName,
        disabled: _disabledClassName,
        hidden: _hiddenClassName,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon =
            orientation === "left" ? ChevronLeftIcon : ChevronRightIcon
          return <Icon className="h-4 w-4" />
        },
        Nav: () => (
          <Nav
            onNextClick={onNextClick}
            onPreviousClick={onPrevClick}
            navClassName={navClassName}
            buttonPreviousClassName={buttonPreviousClassName}
            buttonNextClassName={buttonNextClassName}
          />
        ),
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

interface CalendarNavProps {
  onPreviousClick?: (month: Date) => void
  onNextClick?: (month: Date) => void
  buttonPreviousClassName?: string
  buttonNextClassName?: string
  navClassName?: string
}

const Nav = ({
  onPreviousClick,
  onNextClick,
  buttonNextClassName,
  buttonPreviousClassName,
  navClassName,
}: CalendarNavProps) => {
  const { previousMonth, nextMonth, goToMonth } = useDayPicker()

  const handlePreviousClick = () => {
    if (!previousMonth) return
    goToMonth(previousMonth)
    onPreviousClick?.(previousMonth)
  }

  const handleNextClick = () => {
    if (!nextMonth) return
    goToMonth(nextMonth)
    onNextClick?.(nextMonth)
  }

  return (
    <nav className={cx("flex items-start", navClassName)}>
      <Button
        variant="outlined"
        color="neutral"
        className={cx(
          "absolute left-0 h-7 w-7 p-0 disabled:opacity-50",
          buttonPreviousClassName
        )}
        disabled={!previousMonth}
        onClick={handlePreviousClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        variant="outlined"
        color="neutral"
        className={cx(
          "absolute right-0 h-7 w-7 p-0 disabled:opacity-50",
          buttonNextClassName
        )}
        disabled={!nextMonth}
        onClick={handleNextClick}
      >
        <ChevronRightIcon />
      </Button>
    </nav>
  )
}
export { Calendar, type DateRange }
