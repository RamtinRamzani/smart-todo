"use client"

import Container from "@/components/layout/Container"
import TaskHeader from "@/components/ui/TaskHeader"

const Page = () => {
  return (
    <>
      <TaskHeader title="Ramtin" day={1} />
      <Container className="mt-9"></Container>
    </>
  )
}

export default Page
