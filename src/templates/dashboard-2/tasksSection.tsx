import { Button } from "@components/ui/button"

interface Task {
  action: string
  customer: string
  unit: string
  date: string
}

interface TasksSectionProps {
  tasks: Task[]
}

export function TasksSection({ tasks }: TasksSectionProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center">
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{task.action}</p>
              <p className="text-sm text-muted-foreground">
                {task.customer} - Unit {task.unit}
              </p>
            </div>
            <div className="ml-auto font-medium">{task.date}</div>
          </div>
        ))}
      </div>
      {tasks.length > 0 && <Button className="w-full">View All Tasks</Button>}
    </div>
  )
}

