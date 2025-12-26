import {
  Calendar,
  ClipboardCheck,
  FileQuestionMark,
  LayoutGrid,
  Settings,
  User,
} from "lucide-react"

export const MAIN_MENU = [
  { id: "menu", href: "/", icon: <LayoutGrid />, label: "Menu" },
  { id: "mine", href: "/mine", icon: <User />, label: "Mine" },
  {
    id: "tasks",
    href: "/tasks",
    icon: <ClipboardCheck />,
    label: "Tasks",
    task: ["Wish List", "All Tasks", "Personal"],
  },
  { id: "calendar", href: "/calendar", icon: <Calendar />, label: "Calendar" },
  { id: "faq", href: "/faq", icon: <FileQuestionMark />, label: "Faq" },
  { id: "setting", href: "/setting", icon: <Settings />, label: "Setting" },
]
