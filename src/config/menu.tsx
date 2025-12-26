import {
  Calendar,
  ClipboardCheck,
  FileQuestionMark,
  LayoutGrid,
  Settings,
  User,
} from "lucide-react"

export const MAIN_MENU = [
  { href: "/", icon: <LayoutGrid />, label: "Menu" },
  { href: "/mine", icon: <User />, label: "Mine" },
  { href: "/tasks", icon: <ClipboardCheck />, label: "Tasks" },
  { href: "/calendar", icon: <Calendar />, label: "Calendar" },
  { href: "/faq", icon: <FileQuestionMark />, label: "Faq" },
  { href: "/setting", icon: <Settings />, label: "Setting" },
]
