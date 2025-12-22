import type { AddTaskButtonProps } from "@/types/types"

const AddTaskButton = ({ onClick }: AddTaskButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-background w-14 h-14 rounded-full 
        absolute bottom-[-12px] right-10 
        shadow-lg flex justify-center items-center 
        text-3xl cursor-pointer
        transition-all duration-300 ease-out
        hover:bg-gradient-to-br hover:from-purple-500 hover:via-purple-700 hover:to-purple-200
        hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 
        active:scale-95
        border border-white/20
      "
    >
      +
    </button>
  )
}

export default AddTaskButton
