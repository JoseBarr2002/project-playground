import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import IMetricCardProps from "./IMetricCardProps";

const MetricCard: React.FC<IMetricCardProps> = ({
  title,
  icon,
  text,
  subText,
}) => (
  <Card className="bg-gray-800 text-white">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <span className="text-2xl">{icon}</span>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{text}</div>
      <p className="text-xs text-gray-400">{subText}</p>
    </CardContent>
  </Card>
);

export default MetricCard;
