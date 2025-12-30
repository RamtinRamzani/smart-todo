"use client"

import { useState } from "react"
import AddTaskButton from "@/components/button/AddTaskButton"
import Container from "@/components/layout/Container"
import PageHeader from "@/components/ui/PageHeader"
import { days } from "@/lib/data/days"
import { useTaskStore } from "@/stores/UseTaskStore"
import type { TaskPageParams } from "@/types/types"
import DayBox from "./_components/DayBox"
import NewTask from "./_components/NewTask"
import TaskModalContent from "./_components/TaskModalContent"

const Page = ({ searchParams }: TaskPageParams) => {
  const { isOpen, toggle, close, currentStep } = useTaskStore()

  const [faqDetails, setFaqDetails] = useState<number | null>()

  const taskType = searchParams.type ?? "All Tasks"

  const filteredDays = days
    .map((day) => {
      if (taskType === "All Tasks") return day

      const filteredTasks = day.tasks.filter(
        (task) => task.category === taskType,
      )

      return {
        ...day,
        tasks: filteredTasks,
      }
    })
    .filter((day) => day.tasks.length > 0)

  const renderDayBoxes = () => (
    <Container className="mt-4 flex flex-col gap-5">
      {filteredDays.map((item, i) => (
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
      <PageHeader title={taskType} />
      {renderDayBoxes()}
      <AddTaskButton onClick={toggle} />
      {isOpen && (
        <NewTask onClose={close}>
          <TaskModalContent currentStep={currentStep} />
        </NewTask>
      )}
    </>
  )
}

export default Page
