"use client"

import "@/styles/calendar.css"
import { useState } from "react"
import type { CalendarProps } from "react-calendar"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

type Value = CalendarProps["value"]

export default function SimpleCalendar() {
  const [date, setDate] = useState(new Date())

  const handleDateChange = (
    value: Value,
    // event?: MouseEvent<HTMLButtonElement>
  ) => {
    if (!value) return
    if (Array.isArray(value)) {
      const first = value.find((v) => v instanceof Date) as Date | undefined
      if (first) {
        setDate(first)
      }
    } else if (value instanceof Date) {
      setDate(value)
    }
  }

  return (
    <div className="rounded-[var(--radius)]  font-[var(--font-sans)]">
      <Calendar
        onChange={handleDateChange}
        value={date}
        prevLabel={
          <span className="text-[hsl(var(--text-purple-100))] text-xl">
            &lsaquo;
          </span>
        }
        nextLabel={
          <span className="text-[hsl(var(--text-purple-100))] text-xl">
            &rsaquo;
          </span>
        }
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        tileClassName={({ date: tileDate, view }) => {
          if (
            view === "month" &&
            tileDate.getDate() === 14 &&
            tileDate.getMonth() === 9 &&
            tileDate.getFullYear() === 2025
          ) {
            return "highlight-day"
          }
          return null
        }}
      />
    </div>
  )
}
