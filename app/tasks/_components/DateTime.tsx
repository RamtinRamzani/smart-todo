"use client"

import { useState } from "react"
import Button from "@/components/button/Button"
import { useTaskStore } from "@/stores/UseTaskStore"

const DateTime = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const { setStep } = useTaskStore()

  return (
    <>
      <h3 className="font-medium capitalize">Set Date & Time</h3>
      <div className="my-8 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-md text-white bg-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="time">
            Time
          </label>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-md text-white bg-transparent"
          />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <Button
          title="cancel"
          variant="secondary"
          size="sm"
          onClick={() => setStep("create")}
        />
        <Button
          title="done"
          variant="primary"
          size="sm"
          className="px-6 cursor-pointer"
          onClick={() => setStep("date")}
        />
      </div>
    </>
  )
}

export default DateTime
