import CreateTask from "./CreateTask"
import DateTime from "./DateTime"
import DateV1 from "./DateV1"
import SetCategory from "./SetCategory"
import TimeV1 from "./TimeV1"

type Props = {
  currentStep: string
}

const TaskModalContent = ({ currentStep }: Props) => {
  switch (currentStep) {
    case "create":
      return <CreateTask />
    case "category":
      return <SetCategory />
    case "datetime":
      return <DateTime />
    case "date":
      return <DateV1 />
    case "time":
      return <TimeV1 />
    default:
      return null
  }
}

export default TaskModalContent
