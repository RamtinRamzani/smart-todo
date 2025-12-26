"use client"

import "@/styles/calendar.css"
// import "react-calendar/dist/Calendar.css"
import Pikaday from "pikaday"
import { useEffect, useRef } from "react"

export default function SimpleCalendar() {
  const myDatepicker = useRef(null)
  useEffect(() => {
    const picker = new Pikaday({
      field: myDatepicker.current,
    })
    return () => picker.destroy()
  }, [])
  return (
    <input
      type="text"
      className="input pika-single"
      defaultValue="Pick a date"
      ref={myDatepicker}
    />
  )
}
