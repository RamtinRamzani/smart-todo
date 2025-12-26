import Image from "next/image"
import type { ProfDetailsTypes } from "@/types/types"

const ProfDetail = ({ profPicture, title, day }: ProfDetailsTypes) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-11">
        <Image
          src={profPicture}
          fill
          className="object-cover rounded-md"
          alt="Your Profile Picture"
          quality={30}
        />
      </div>
      <div className="flex justify-center flex-col">
        <h2 className="text-sm font-normal text-purple200">Hello {title}</h2>
        <h3 className="text-sm text-purple100">Keep For {day} Day</h3>
      </div>
    </div>
  )
}

export default ProfDetail
