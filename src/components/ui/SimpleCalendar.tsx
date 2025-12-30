"use client"

import "@/styles/calendar.css"
import { useRef } from "react"

export default function SimpleCalendar() {
  const myDatepicker = useRef(null)

  return (
    <input
      type="text"
      className="input pika-single"
      defaultValue="Pick a date"
      ref={myDatepicker}
    />
  )
}
