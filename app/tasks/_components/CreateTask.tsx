import { SquarePlus } from "lucide-react"
import Button from "@/components/button/Button"
import { useTaskStore } from "@/stores/UseTaskStore"

const CreateTask = () => {
  const { setStep, close } = useTaskStore()

  return (
    <>
      {/* modal content */}
      <h3 className="font-medium capitalize">Create New Task</h3>
      <div className="my-8 flex flex-col gap-2">
        <input
          type="text"
          className="w-full px-4 capitalize text-white placeholder:text-purple-50 border-b-2 border-b-border"
          placeholder="title"
        />
        <button className="text-purple400 flex justify-between items-center cursor-pointer">
          <span className="text-sm font-semibold">Add sub-task</span>
          <SquarePlus size={18} />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <Button
          title="category"
          variant="secondary"
          size="sm"
          onClick={() => setStep("category")}
        />
        <Button
          title="date & time"
          variant="secondary"
          size="sm"
          onClick={() => setStep("datetime")}
        />
        <Button title="set" variant="primary" size="sm" onClick={close} />
      </div>
    </>
  )
}

export default CreateTask
