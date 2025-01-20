import type { Metadata } from "next"
import { MetricCard } from "./metricCard"
import { StatsCard } from "./statsCard"
import { TasksSection } from "./tasksSection"
import { RevenueChart } from "./revenueChart"
import { OccupancyChart } from "./occupancyChart"
import { PaymentChart } from "./paymentChart"
import { Notifications } from "./notifications"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Storage facility management dashboard",
}

export default function DashboardPage() {
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
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      {/* Main metrics with charts */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <MetricCard
              title="Monthly Revenue"
              value="$9,505.03"
              subText="last month"
              trend={{
                value: -7,
                label: "From November 2024",
              }}
              className="mb-4"
            />
            <RevenueChart />
          </CardContent>
        </Card>

        <Card className="col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Occupancy</CardTitle>
          </CardHeader>
          <CardContent>
            <MetricCard
              title="Current Occupancy"
              value="86%"
              subText="current"
              trend={{
                value: -1,
                label: "From Last Month",
              }}
              className="mb-4"
            />
            <OccupancyChart />
          </CardContent>
        </Card>

        <Card className="col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <MetricCard title="Awaiting Payment" value="$6,385.00" subText="total" className="mb-4" />
            <PaymentChart />
          </CardContent>
        </Card>
      </div>

      {/* Quick stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <StatsCard value="2" label="# Late Units" />
        <StatsCard value="47.9%" label="% Website Rentals" />
        <StatsCard value="81.2%" label="% Recurring Billing" />
        <StatsCard value="2" label="# Move Ins" />
        <StatsCard value="3" label="# Move Outs" />
      </div>

      {/* Tasks and Notifications */}
      <div className="grid gap-6 lg:grid-cols-2">
        <TasksSection tasks={tasks} />
        <Notifications />
      </div>
    </div>
  )
}

