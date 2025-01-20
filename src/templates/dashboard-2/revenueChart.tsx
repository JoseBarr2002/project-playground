import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { month: "Jan", revenue: 8200 },
  { month: "Feb", revenue: 9100 },
  { month: "Mar", revenue: 8800 },
  { month: "Apr", revenue: 9505 },
  { month: "May", revenue: 9200 },
  { month: "Jun", revenue: 8900 },
  { month: "Jul", revenue: 9300 },
  { month: "Aug", revenue: 8700 },
  { month: "Sep", revenue: 9100 },
  { month: "Oct", revenue: 8600 },
  { month: "Nov", revenue: 9505 },
  { month: "Dec", revenue: 9200 },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value: number) => [`$${value}`, "Revenue"]} cursor={{ fill: "rgba(0,0,0,0.1)" }} />
        <Bar dataKey="revenue" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

