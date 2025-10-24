import Button from "../../ui/Button"

const CreateNewTask = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop - click this to close */}
      <div
        className="absolute inset-0 bg-purple-400/10 backdrop-blur-xs transition-opacity duration-200"
        onClick={() => onClose?.()}
        aria-hidden
      />

      {/* centered modal - stop clicks from bubbling to the backdrop */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-80 h-60 bg-background rounded-lg shadow-lg p-4 border border-border"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation()
          }
        }}
      >
        {/* modal content */}
        <h3 className="font-medium mb-2">Create New Task</h3>
        <input type="text" />
        <div className="flex justify-between items-center">
          <Button title="category" variant="primary" size="sm" />
          <Button title="date and time" variant="secondary" size="sm" />
          <Button title="set" variant="secondary" size="sm" />
        </div>
      </div>
    </div>
  )
}

export default CreateNewTask
