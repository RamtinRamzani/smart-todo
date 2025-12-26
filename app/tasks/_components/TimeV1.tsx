import Button from "@/components/button/Button"
import SimpleCalendar from "@/components/ui/SimpleCalendar"
import { useTaskStore } from "@/stores/UseTaskStore"

const TimeV1 = () => {
  const { setStep } = useTaskStore()
  return (
    <div>
      <SimpleCalendar />
      <div className="mt-4">
        <div className="flex justify-between mt-6">
          <Button
            title="cancel"
            variant="secondary"
            size="sm"
            onClick={() => setStep("create")}
          />
          <Button
            title="done"
            variant="primary"
            size="sm"
            className="px-6 cursor-pointer"
            onClick={() => setStep("date")}
          />
        </div>
      </div>
    </div>
  )
}

export default TimeV1
