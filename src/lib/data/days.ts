import type { DayItem } from "@/types/types"

export const days: DayItem[] = [
  {
    day: "Today Tasks",
    tasks: [
      { id: "1", title: "Buy a new shoes", category: "Wish List" },
      { id: "2", title: "Finish Report", category: "Work" },
      { id: "3", title: "Gym Workout", category: "Personal" },
    ],
  },
  {
    day: "Future",
    tasks: [
      { id: "4", title: "New laptop", category: "Wish List" },
      { id: "5", title: "Team meeting", category: "Work" },
    ],
  },
  {
    day: "Previous",
    tasks: [{ id: "6", title: "Morning run", category: "Personal" }],
  },
]
