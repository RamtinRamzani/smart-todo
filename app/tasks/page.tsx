"use client"

import { useState } from "react"
import Container from "../_components/layout/Container"
import CreateNewTask from "../_components/shared/add-task/CreateNewTask"
import DayBox from "../_components/shared/DayBox"
import TaskHeaderV1 from "../_components/shared/TaskHeaderV1"
import AddTaskButton from "../_components/ui/AddTaskButton"

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
        <CreateNewTask onClose={() => setShowModalAddItem(false)} />
      )}
    </>
  )
}

export default Page
