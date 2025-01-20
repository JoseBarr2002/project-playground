import { Bell } from "lucide-react"
import { Button } from "@components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"

interface Notification {
  id: string
  title: string
  description: string
  date: string
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Payment Overdue",
    description: "Unit R26 payment is 30 days overdue",
    date: "2 hours ago",
  },
  {
    id: "2",
    title: "Move Out Scheduled",
    description: "Kim Lundstrom scheduled for move out",
    date: "5 hours ago",
  },
  {
    id: "3",
    title: "New Booking",
    description: "New unit booking through website",
    date: "1 day ago",
  },
]

export function Notifications() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>
        <CardDescription>You have {notifications.length} unread notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start justify-between space-x-4 rounded-lg border p-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
              <p className="text-xs text-muted-foreground">{notification.date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

