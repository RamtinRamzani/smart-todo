import { Timer } from "lucide-react"
import Button from "@/components/button/Button"
import Box from "@/components/ui/Box"
import SimpleCalendar from "@/components/ui/SimpleCalendar"
import { useTaskStore } from "@/stores/UseTaskStore"

const DateV1 = () => {
  const { setStep } = useTaskStore()
  return (
    <div>
      <SimpleCalendar />
      <div className="mt-4">
        <Box icon={<Timer />} ok="yes" title="Time" />
        <Box icon={<Timer />} ok="no" title="Reminder" />
        <Box icon={<Timer />} ok="no" title="Repeat" />

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

export default DateV1
