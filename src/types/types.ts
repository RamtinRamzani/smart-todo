import type { StaticImageData } from "next/image"

/* Task Types */

type TaskCategory = "Wish List" | "All Tasks" | "Personal" | "Work"

interface TaskItem {
  id: string
  title: string
  category: TaskCategory
}

interface DayItem {
  day: string
  tasks: TaskItem[]
}

interface DayBoxProps {
  item: DayItem
  index: number
  isOpen: boolean
  onToggle: () => void
  onEditTask: (task: TaskItem) => void
}

type Step = "create" | "category" | "datetime" | "date" | "time"

interface TaskState {
  isOpen: boolean
  currentStep: Step
  toggle: () => void
  close: () => void
  currentTask?: TaskItem
  setStep: (step: Step) => void
  setCurrentTask: (task?: TaskItem) => void
}

/* UI / Layout */

type AddTaskButtonProps = {
  onClick?: () => void
}

type ButtonProps = {
  className?: string
  title?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  type?: "button" | "submit" | "reset"
  size?: "sm" | "md" | "lg"
}

type ContainerProps = {
  children?: React.ReactNode
  className?: string
}

type BoxProps = {
  icon?: React.ReactNode
  title: string
  ok: "yes" | "no"
}

interface FieldProps {
  icon: React.ReactNode
  label: string
  value: string
  addButton?: boolean
}

type TaskProps = {
  onClose?: () => void
  children?: React.ReactNode
}

type ProfDetailsTypes = {
  profPicture: StaticImageData
  title?: string
  day?: number
}

type HeaderProps = {
  title: string
}

/* Menu / Routing */

type MenuListProps = {
  openSubMenu: string | null
  onToggleSubMenu: (id: string) => void
  onCloseAnySubMenu: () => void
  onCloseEverything: () => void
}

type TaskPageParams = {
  searchParams: {
    type?: TaskCategory
  }
}

export type {
  DayItem,
  DayBoxProps,
  TaskProps,
  TaskCategory,
  AddTaskButtonProps,
  ButtonProps,
  ContainerProps,
  BoxProps,
  FieldProps,
  ProfDetailsTypes,
  HeaderProps,
  MenuListProps,
  TaskPageParams,
  TaskState,
}
