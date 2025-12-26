"use client"

import { useState } from "react"
import AddTaskButton from "@/components/button/AddTaskButton"
import Container from "@/components/layout/Container"
import PageHeader from "@/components/ui/PageHeader"
import { useTaskStore } from "@/stores/UseTaskStore"
import CreateTask from "./_components/CreateTask"
import DateTime from "./_components/DateTime"
import DateV1 from "./_components/DateV1"
import DayBox from "./_components/DayBox"
import NewTask from "./_components/NewTask"
import SetCategory from "./_components/SetCategory"
import TimeV1 from "./_components/TimeV1"

const Page = () => {
  const { isOpen, toggle, close, currentStep } = useTaskStore()

  const [faqDetails, setFaqDetails] = useState<number | null>()
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

  const renderModalContent = () => {
    switch (currentStep) {
      case "create":
        return <CreateTask />
      case "category":
        return <SetCategory />
      case "datetime":
        return <DateTime />
      case "date":
        return <DateV1 />
      case "time":
        return <TimeV1 />
      default:
        return null
    }
  }

  const renderDayBoxes = () => (
    <Container className="mt-4 flex flex-col gap-5">
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
  )
  return (
    <>
      <PageHeader title="All Task" />
      {renderDayBoxes()}
      <AddTaskButton onClick={toggle} />
      {isOpen && <NewTask onClose={close}>{renderModalContent()}</NewTask>}
    </>
  )
}

export default Page
