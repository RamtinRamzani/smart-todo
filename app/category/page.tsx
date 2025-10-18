"use client";

import Container from "../_components/lib/Container";
import TaskHeader from "../_components/lib/TaskHeader";

const Page = () => {
  return (
    <>
      <TaskHeader title="Ramtin" day={1} />
      <Container className="mt-9"></Container>
    </>
  );
};

export default Page;
