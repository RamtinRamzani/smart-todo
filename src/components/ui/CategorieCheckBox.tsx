import { useId } from "react"

const CategorieRadioButton = ({
  title,
  selected,
  onSelect,
}: {
  title: string
  selected: string
  onSelect: (value: string) => void
}) => {
  const id = useId()
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name="category"
        id={id}
        checked={selected === title}
        onChange={() => onSelect(title)}
        className="w-5 h-5 rounded-full border border-border bg-background text-purple-600 shadow-sm focus:outline-none focus:ring-2 cursor-pointer focus:ring-purple-300 transition-transform duration-150"
      />
      <label
        htmlFor={id}
        className="ml-1 text-sm font-medium text-foreground select-none capitalize"
      >
        {title}
      </label>
    </div>
  )
}

export default CategorieRadioButton
