type TaskProps = {
  onClose?: () => void
  children?: React.ReactNode
  // title?: string
}

const NewTask = ({ onClose, children }: TaskProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-purple-400/10 backdrop-blur-xs transition-opacity duration-200"
        onClick={() => onClose?.()}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-72 bg-background rounded-lg shadow-lg px-4 py-8 border border-border"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation()
          }
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default NewTask
