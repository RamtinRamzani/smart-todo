import { Calendar, ClipboardCheck, LayoutGrid, User } from "lucide-react"
import Link from "next/link"
import Container from "./Container"

const Footer = () => {
  const menu = [
    { href: "/", icon: <LayoutGrid />, label: "Menu" },
    { href: "/tasks", icon: <ClipboardCheck />, label: "Tasks" },
    { href: "/calendar", icon: <Calendar />, label: "Calendar" },
    { href: "/mine", icon: <User />, label: "Mine" },
  ]

  return (
    <Container className="bg-background">
      <nav className="h-full flex justify-center">
        {menu.map((item) => {
          return (
            <Link key={item.label} href={item.href} className="">
              <button className="px-4 py-4 flex flex-col gap-1 items-center text-purple300 cursor-pointer hover:text-purple100 hover:transition-all duration-150 hover:bg-secondaryBackground">
                <span>{item.icon}</span>
                <p>{item.label}</p>
              </button>
            </Link>
          )
        })}
      </nav>
    </Container>
  )
}

export default Footer
