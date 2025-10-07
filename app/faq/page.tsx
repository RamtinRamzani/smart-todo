"use client";

import { useState } from "react";
import Container from "../_components/ui/Container";
import FAQItem from "../_components/ui/FaqItem";
import Task from "../_components/ui/Task";

const Page = () => {
  const faq = [
    {
      question: "Question 1?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat cumque quidem aliquam architecto ipsam corrupti incidunt aliquid voluptatem et. Id?",
    },
    {
      question: "Question 2?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat cumque quidem....",
    },
    {
      question: "Question 3?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat cumque quidem ",
    },
    {
      question: "Question 4?",
      answer: "Lorem consectetur adipisicing elit.Placeat cumque quidem ",
    },
  ];

  const [faqDetails, setFaqDetails] = useState<number | null>(null);

  return (
    <>
      <Task title="FAQ" />
      <Container className="mt-9 flex flex-col gap-5">
        {faq.map((item, i) => (
          <FAQItem
            key={item.question}
            item={item}
            index={i}
            isOpen={faqDetails === i}
            onToggle={() => setFaqDetails((prev) => (prev === i ? null : i))}
          />
        ))}
      </Container>
    </>
  );
};

export default Page;
