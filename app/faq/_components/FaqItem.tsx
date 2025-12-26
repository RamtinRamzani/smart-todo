"use client"

import { CircleArrowDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const FAQItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [maxH, setMaxH] = useState("0px")

  useEffect(() => {
    if (!contentRef.current) return
    setMaxH(isOpen ? `${contentRef.current.scrollHeight}px` : "0px")
  }, [isOpen])

  return (
    <button
      key={item.question}
      className="py-2.5 px-4 bg-background rounded-2xl border border-border cursor-pointer transition-shadow duration-200"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-medium text-purple100 transition-colors duration-200">
          {item.question}
        </h3>
        <CircleArrowDown
          size={24}
          className={`text-icon transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: maxH,
          overflow: "hidden",
          transition:
            "max-height 350ms cubic-bezier(.2,.8,.2,1), opacity 300ms ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="text-purple300 mt-4 text-sm text-left">{item.answer}</p>
      </div>
    </button>
  )
}

export default FAQItem
