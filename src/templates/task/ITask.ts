export type TaskType = "Documentation" | "Bug" | "Feature" | "Print Job"
export type TaskStatus = "In Progress" | "Backlog" | "Todo" | "Canceled" | "Done"
export type TaskPriority = "Low" | "Medium" | "High"

export interface Task {
  id: string
  type: TaskType
  title: string
  status: TaskStatus
  priority: TaskPriority
}

