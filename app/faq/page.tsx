import { CircleArrowDown } from "lucide-react";
import Container from "../_components/ui/Container";
import Task from "../_components/ui/Task";

const page = () => {
  return (
    <>
      <Task title="FAQ" />
      <Container className="mt-9 flex flex-col gap-5">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className="py-2.5 px-4 bg-background rounded-2xl border border-border flex items-center gap-2 cursor-pointer"
          >
            <h3 className="text-sm text-primaryText transition-colors duration-200">
              The phone cannot receive notif and reminders.
            </h3>
            <CircleArrowDown size={30} className="text-icon cursor-pointer" />
          </div>
        ))}
      </Container>
    </>
  );
};

export default page;
