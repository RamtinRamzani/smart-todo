import type { ContainerProps } from "@/types/types"

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`px-8 ${className}`}>{children}</div>
}

export default Container
