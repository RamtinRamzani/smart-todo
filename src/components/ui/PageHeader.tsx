import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { HeaderProps } from "@/types/types"
import Container from "../layout/Container"

const PageHeader = ({ title }: HeaderProps) => {
  return (
    <Container className="text-white mt-2 py-2 flex items-center">
      <button
        type="button"
        className="p-2 -ml-2 rounded-full active:bg-white/10 cursor-pointer"
      >
        <Link href="/tasks">
          <ArrowLeft size={24} />
        </Link>
      </button>

      <h2 className="text-lg font-normal">{title}</h2>
    </Container>
  )
}

export default PageHeader
