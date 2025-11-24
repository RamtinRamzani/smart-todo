import type React from "react"

type BoxProps = {
  icon?: React.ReactNode
  title: string
  ok: "yes" | "no"
}

const Box = ({ icon, title, ok }: BoxProps) => {
  return (
    <div className="flex items-center justify-between px-2 py-2 mt-2 bg-purple800 rounded-lg">
      <span className="mr-3 text-purple400">{icon}</span>
      <span className="flex-1 text-sm font-medium text-foreground text-purple100 capitalize">
        {title}
      </span>
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-colors text-purple400 capitalize">
        {ok}
      </span>
    </div>
  )
}

export default Box
