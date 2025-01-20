import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { month: "Jan", occupancy: 82 },
  { month: "Feb", occupancy: 84 },
  { month: "Mar", occupancy: 86 },
  { month: "Apr", occupancy: 87 },
  { month: "May", occupancy: 86 },
  { month: "Jun", occupancy: 85 },
  { month: "Jul", occupancy: 86 },
  { month: "Aug", occupancy: 87 },
  { month: "Sep", occupancy: 86 },
  { month: "Oct", occupancy: 85 },
  { month: "Nov", occupancy: 86 },
  { month: "Dec", occupancy: 86 },
]

export function OccupancyChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip formatter={(value: number) => [`${value}%`, "Occupancy"]} />
        <Line
          type="monotone"
          dataKey="occupancy"
          stroke="currentColor"
          strokeWidth={2}
          dot={false}
          className="stroke-primary"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

