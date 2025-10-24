"use client"

import Container from "../_components/layout/Container"
import TaskHeader from "../_components/shared/TaskHeader"

const Page = () => {
  return (
    <>
      <TaskHeader title="Ramtin" day={1} />
      <Container className="mt-9"></Container>
    </>
  )
}

export default Page
