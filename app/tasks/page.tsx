"use client"

import { SquarePlus } from "lucide-react"
import { useState } from "react"
import AddTaskButton from "@/components/button/AddTaskButton"
import Button from "@/components/button/Button"
import Container from "@/components/layout/Container"
import TaskHeaderV1 from "@/components/ui/TaskHeaderV1"
import CreateNewTask from "./_components/CreateNewTask"
import DayBox from "./_components/DayBox"

const Page = () => {
  const [showModalAddItem, setShowModalAddItem] = useState(false)

  const [faqDetails, setFaqDetails] = useState<number | null>(0) // Open Today by default
  const days = [
    {
      day: "Today Tasks",
      title: ["Title 1", "Title 2", "Title 3"],
    },
    {
      day: "Future",
      title: ["Title 1", "Title 2"],
    },
    {
      day: "Previous",
      title: ["Title 1"],
    },
  ]
  return (
    <>
      <TaskHeaderV1 title="All Task" />
      <Container className="mt-9 flex flex-col gap-5">
        {days.map((item, i) => (
          <DayBox
            key={item.day}
            item={item}
            index={i}
            isOpen={faqDetails === i}
            onToggle={() => setFaqDetails((prev) => (prev === i ? null : i))}
          />
        ))}
      </Container>

      <AddTaskButton onclick={() => setShowModalAddItem((prev) => !prev)} />
      {showModalAddItem && (
        <CreateNewTask
          onClose={() => setShowModalAddItem(false)}
          title="create new task"
        >
          {/* modal content */}
          <div className="my-8 flex flex-col gap-2">
            <input
              type="text"
              className="w-full py-2 px-4 capitalize text-white placeholder:text-purple-50 border-b-2 border-b-border"
              placeholder="title"
            />

            <button className="text-purple400 flex justify-between items-center cursor-pointer">
              <span className="text-sm font-semibold">Add sub-task</span>
              <SquarePlus size={18} />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <Button title="category" variant="primary" size="sm" />
            <Button title="date & time" variant="secondary" size="sm" />
            <Button title="set" variant="secondary" size="sm" />
          </div>
        </CreateNewTask>
      )}
    </>
  )
}

export default Page
