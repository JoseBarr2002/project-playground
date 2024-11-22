import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { ChartContainer } from "@components/ui/chart";

const SalesCardChart = () => {
  const chartConfig = {
    sales: {
      label: "Sales",
      color: "#adfa1d",
    },
  };

  const chartData = [
    { month: "January", sales: 1000 },
    { month: "February", sales: 400 },
    { month: "March", sales: 800 },
    { month: "April", sales: 1200 },
    { month: "May", sales: 200 },
    { month: "June", sales: 600 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>Daily sales for the past week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full h-60" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="month"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={value => `$${value}`}
            />
            <Bar dataKey="sales" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SalesCardChart;
