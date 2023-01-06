import { forwardRef, useState } from "react"
import { CalendarMode, CalendarProps } from "./interface"
import { useMergeValue } from "@illa-design/system"
import { MonthCardCalendar } from "./month-card-calednar"
import { YearCardCalendar } from "./year-card-calendar"
import dayjs, { Dayjs } from "dayjs"

export const CardCalendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      colorScheme = "blue",
      headerType = "button",
      onChange,
      panelTodayBtn,
      mode,
      defaultMode,
      onPanelChange,
      ...otherProps
    } = props

    const [selectedDate, setSelectedDate] = useMergeValue<Dayjs>(
      dayjs(new Date()),
      {
        defaultValue: defaultValue,
        value: value,
      },
    )

    const [finalMode, setFinalMode] = useMergeValue<CalendarMode>("month", {
      defaultValue: defaultMode,
      value: mode,
    })

    const [currentDate, setCurrentDate] = useState(selectedDate)

    if (finalMode === "month") {
      return (
        <MonthCardCalendar
          colorScheme={colorScheme}
          value={selectedDate}
          currentDate={currentDate}
          panelTodayBtn={panelTodayBtn}
          onCurrentDateChange={(v) => {
            setCurrentDate(v)
            onPanelChange?.(v)
          }}
          onChange={(v) => {
            if (value === undefined) {
              setSelectedDate(v)
            }
            onChange?.(v)
          }}
        />
      )
    } else {
      return (
        <YearCardCalendar
          colorScheme={colorScheme}
          value={selectedDate}
          currentDate={currentDate}
          onCurrentDateChange={(v) => {
            setCurrentDate(v)
            onPanelChange?.(v)
          }}
          onChange={(v) => {
            if (value === undefined) {
              setSelectedDate(v)
            }
            setCurrentDate(v)
            if (v.year() !== currentDate.year()) {
              onPanelChange?.(v)
            }
            onChange?.(v)
          }}
        />
      )
    }
  },
)

CardCalendar.displayName = "CardCalendar"
