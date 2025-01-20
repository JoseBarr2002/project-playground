import type { Metadata } from "next"
import { MetricCard } from "./metricCard"
import { StatsCard } from "./statsCard"
import { TasksSection } from "./tasksSection"
import { RevenueChart } from "./revenueChart"
import { OccupancyChart } from "./occupancyChart"
import { PaymentChart } from "./paymentChart"
import { Notifications } from "./notifications"
import { DateRangePicker } from "./dateRangePicker"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Storage facility management dashboard",
}

export default function DashboardTemplate() {
  const tasks = [
    {
      action: "Move Out",
      customer: "Kim Lundstrom",
      unit: "R26",
      date: "12/10/2024",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <DateRangePicker />
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard value="$9,505.03" label="Revenue (Last Month)" />
            <StatsCard value="86%" label="Current Occupancy" />
            <StatsCard value="$6,385.00" label="Awaiting Payment" />
            <StatsCard value="2" label="Late Units" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <RevenueChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Occupancy Trend</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <OccupancyChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <TasksSection tasks={tasks} />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Payment Status</CardTitle>
              </CardHeader>
              <CardContent>
                <PaymentChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Analytics content coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Reports content coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Notifications />
        </TabsContent>
      </Tabs>
    </div>
  )
}

