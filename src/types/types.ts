import type { StaticImageData } from "next/image"

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
  // title?: string
}

type ProfDetailsTypes = {
  profPicture: StaticImageData
  title?: string
  day?: number
}

type HeaderProps = { title: string }

type MenuListProps = {
  openSubMenu: string | null
  onToggleSubMenu: (id: string) => void
  onCloseAnySubMenu: () => void
  onCloseEverything: () => void
}

export type {
  DayItem,
  DayBoxProps,
  TaskProps,
  AddTaskButtonProps,
  ButtonProps,
  ContainerProps,
  BoxProps,
  FieldProps,
  ProfDetailsTypes,
  HeaderProps,
  MenuListProps,
}
