import { useState } from "react"
import { Input } from "@components/ui/input"
import { Button } from "@components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Checkbox } from "@components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@components/ui/dropdown-menu"
import { Badge } from "@components/ui/badge"
import { MoreHorizontal, ChevronDown } from "lucide-react"
import { useTaskStore } from "./taskStore"
import { Task, type TaskStatus, type TaskPriority } from "./ITask"
import { Card } from "@components/ui/card"

export default function TestTemplate() {
  const { tasks, addTask, removeTask, selectedTasks, toggleTaskSelection } = useTaskStore()
  const [filter, setFilter] = useState("")

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(filter.toLowerCase()) || task.id.toLowerCase().includes(filter.toLowerCase()),
  )

  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-500"
      case "Backlog":
        return "bg-gray-500"
      case "Todo":
        return "bg-yellow-500"
      case "Canceled":
        return "bg-red-500"
      case "Done":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getPriorityColor = (priority: TaskPriority) => {
    switch (priority) {
      case "High":
        return "text-red-500"
      case "Medium":
        return "text-yellow-500"
      case "Low":
        return "text-blue-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p className="text-gray-500">Here's a list of your tasks for this month!</p>
        </div>
        <Button
          onClick={() =>
            addTask({
              type: "Feature",
              title: "New Task",
              status: "Todo",
              priority: "Medium",
            })
          }
        >
          Add Task
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Filter tasks..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
        <Button variant="outline">
          Status
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline">
          Priority
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <Card className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>Task</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedTasks.includes(task.id)}
                    onCheckedChange={() => toggleTaskSelection(task.id)}
                  />
                </TableCell>
                <TableCell>{task.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{task.type}</Badge>
                    <span>{task.title}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className={getPriorityColor(task.priority)}>{task.priority}</span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => removeTask(task.id)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

