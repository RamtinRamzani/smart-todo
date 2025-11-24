"use client"

import { useState } from "react"
import Button from "@/components/button/Button"
import CategorieRadioButton from "@/components/ui/CategorieCheckBox"
import { useTaskStore } from "@/stores/UseTaskStore"

const categories = [
  "no category",
  "work",
  "personal",
  "wishlist",
  "birthday",
  "daily",
]

const SetCategory = () => {
  const [selected, setSelected] = useState("no category")
  const { setStep } = useTaskStore()

  return (
    <>
      <h3 className="font-medium capitalize">Set Category</h3>
      <div className="my-8 grid grid-cols-2 gap-2">
        {categories.map((cat) => (
          <CategorieRadioButton
            key={cat}
            title={cat}
            selected={selected}
            onSelect={setSelected}
          />
        ))}
      </div>
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
          onClick={() => setStep("create")}
        />
      </div>
    </>
  )
}

export default SetCategory
