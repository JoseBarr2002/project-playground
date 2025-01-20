import { create } from "zustand"
import type { Task } from "./ITask"

interface TaskState {
  tasks: Task[]
  addTask: (task: Omit<Task, "id">) => void
  removeTask: (id: string) => void
  selectedTasks: string[]
  toggleTaskSelection: (id: string) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    {
      id: "TASK-0001",
      type: "Print Job",
      title: "Print these for me",
      status: "Todo",
      priority: "Low",
    },
    {
      id: "TASK-0002",
      type: "Print Job",
      title: "Print these ASAP",
      status: "Todo",
      priority: "High",
    },
    {
      id: "TASK-0003",
      type: "Print Job",
      title: "Print these again",
      status: "In Progress",
      priority: "Medium",
    },
    // Add more initial tasks as needed
  ],
  selectedTasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: `TASK-${Math.floor(Math.random() * 10000)}` }],
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  toggleTaskSelection: (id) =>
    set((state) => ({
      selectedTasks: state.selectedTasks.includes(id)
        ? state.selectedTasks.filter((taskId) => taskId !== id)
        : [...state.selectedTasks, id],
    })),
}))

