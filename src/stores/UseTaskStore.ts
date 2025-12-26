import { create } from "zustand"

type Step = "create" | "category" | "datetime" | "date" | "time"

interface TaskState {
  isOpen: boolean
  currentStep: Step
  toggle: () => void
  close: () => void
  setStep: (step: Step) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  isOpen: false,
  currentStep: "create",
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false, currentStep: "create" }),
  setStep: (step) => set({ currentStep: step }),
}))
