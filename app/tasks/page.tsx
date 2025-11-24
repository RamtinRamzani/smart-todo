"use client"

import { useState } from "react"
import AddTaskButton from "@/components/button/AddTaskButton"
import Container from "@/components/layout/Container"
import TaskHeaderV1 from "@/components/ui/TaskHeaderV1"
import { useTaskStore } from "@/stores/UseTaskStore"
import CreateTask from "./_components/CreateTask"
import DateTime from "./_components/DateTime"
import DayBox from "./_components/DayBox"
import NewTask from "./_components/NewTask"
import SetCategory from "./_components/SetCategory"

const Page = () => {
  const { isOpen, toggle, close, currentStep } = useTaskStore()

  const [faqDetails, setFaqDetails] = useState<number | null>() // Open Today by default
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

      <AddTaskButton onClick={toggle} />
      {isOpen && (
        <NewTask onClose={close}>
          {currentStep === "create" ? (
            <CreateTask />
          ) : currentStep === "category" ? (
            <SetCategory />
          ) : currentStep === "datetime" ? (
            <DateTime />
          ) : null}
        </NewTask>
      )}
    </>
  )
}

export default Page
