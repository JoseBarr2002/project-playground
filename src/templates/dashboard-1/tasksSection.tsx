import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tasks</CardTitle>
        <div className="text-sm text-muted-foreground">There are 340 uncompleted tasks due.</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground">
            <div>Action</div>
            <div>Customer</div>
            <div>Unit</div>
            <div className="text-right">Date</div>
          </div>
          {tasks.map((task, i) => (
            <div key={i} className="grid grid-cols-4 items-center text-sm">
              <div>{task.action}</div>
              <div>{task.customer}</div>
              <div>{task.unit}</div>
              <div className="flex items-center justify-end gap-2">
                {task.date}
                <Button size="sm" variant="secondary">
                  Finalize
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

