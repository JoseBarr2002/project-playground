import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Not Yet Due", value: 40, color: "#94e2cd" },
  { name: "0-30 days", value: 20, color: "#4cc38a" },
  { name: "31-60 days", value: 15, color: "#1b4332" },
  { name: "61-90 days", value: 10, color: "#081c15" },
  { name: "90+ days", value: 15, color: "#040d0a" },
]

export function PaymentChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={130} innerRadius={85}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => [`${value}%`, "Percentage"]} />
      </PieChart>
    </ResponsiveContainer>
  )
}

