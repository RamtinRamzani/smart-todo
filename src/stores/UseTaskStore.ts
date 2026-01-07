import { create } from "zustand"
import type { TaskState } from "@/types/types"

export const useTaskStore = create<TaskState>((set) => ({
  isOpen: false,
  currentStep: "create",
  currentTask: undefined,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () =>
    set({ isOpen: false, currentStep: "create", currentTask: undefined }),
  setStep: (step) => set({ currentStep: step }),
  setCurrentTask: (task) => set({ currentTask: task }),
}))
