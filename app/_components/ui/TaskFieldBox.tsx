import { Plus } from "lucide-react";

interface FieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  addButton?: boolean;
}

const TaskFieldBox = ({
  icon,
  label,
  value,
  addButton = false,
}: FieldProps) => (
  <div
    className={`relative flex items-center gap-2 py-3 px-4 rounded-xl bg-background border border-border flex-1 ${
      addButton ? "pr-10" : ""
    }`}
  >
    {icon}
    <div className="flex flex-col gap-1 flex-1 min-w-0">
      <span className="text-purple400 text-sm truncate">{label}</span>
      <span className="text-xs text-purple100 truncate">{value}</span>
    </div>
    {addButton && (
      <button className="absolute top-1/2 -translate-y-1/2 right-2 p-1 rounded-full bg-purple600 text-purple100">
        <Plus size={12} />
      </button>
    )}
  </div>
);

export default TaskFieldBox;
