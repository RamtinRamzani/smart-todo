import { SearchIcon } from "lucide-react"
import profilePic from "@/assets/Picture/DSC07502_733815.jpg"
import HamburgerMenu from "../navigation/HamburgerMenu"
import ProfDetail from "../ui/ProfDetail"
import Container from "./Container"

const Header = () => {
  return (
    <header className="bg-background rounded-b-2xl border-b-2 border-border shrink-0">
      <Container className="text-white font-semibold h-14 mt-3 pb-2 flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <HamburgerMenu />
          <ProfDetail profPicture={profilePic} title="Ramtin" day={5} />
        </div>

        <button>
          <SearchIcon size={28} />
        </button>
      </Container>
    </header>
  )
}

export default Header
