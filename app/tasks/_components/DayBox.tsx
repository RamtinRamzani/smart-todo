"use client"

import { CircleArrowDown, CircleEllipsis, CirclePlus } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface DayItem {
  day: string
  title: string[]
}

interface DayBoxProps {
  item: DayItem
  index: number
  isOpen: boolean
  onToggle: () => void
}

const DayBox = ({ item, index, isOpen, onToggle }: DayBoxProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [maxH, setMaxH] = useState("0px")

  useEffect(() => {
    if (!contentRef.current) return
    setMaxH(isOpen ? `${contentRef.current.scrollHeight}px` : "0px")
  }, [isOpen])

  const renderTasks = () => (
    <div className="space-y-2">
      {item.title.map((title) => (
        <div
          key={title}
          className="w-5/6 ml-auto rounded-2xl py-2.5 px-2 flex items-center justify-between gap-2 bg-background border border-border cursor-pointer text-purple100 mt-2"
        >
          <div className="flex items-center gap-2">
            <CircleEllipsis className="text-purple400 h-5" />
            <p className="text-xs font-light capitalize">{title}</p>
          </div>
          <div className="flex items-center gap-2">
            <CirclePlus className="text-purple400 h-5" />
          </div>
        </div>
      ))}
      {index === 0 && (
        <div className="flex gap-2 items-center justify-end cursor-pointer">
          <span className="text-xs">See more</span>
          <CircleArrowDown size={16} className="text-purple400" />
        </div>
      )}
    </div>
  )

  return (
    <button onClick={onToggle} aria-expanded={isOpen}>
      <div className="rounded-2xl py-2.5 px-4 flex items-center justify-between gap-2 bg-background border border-border cursor-pointer">
        <h3 className="text-sm font-medium text-purple100 transition-colors duration-200">
          {item.day}
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
            "max-height 150ms cubic-bezier(.2,.8,.2,1), opacity 100ms ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {renderTasks()}
      </div>
    </button>
  )
}

export default DayBox
