import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Badge } from "@components/ui/badge"

interface StatsCardProps {
  title: string
  value: number | string
  change?: number
  unit?: string
}

export function StatsCard({ title, value, change, unit }: StatsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          {title}
          {change && (
            <Badge variant={change > 0 ? "default" : "destructive"} className="ml-2">
              {change > 0 ? `+${change}%` : `${change}%`}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">
          {value}
          {unit && <span className="text-base font-normal ml-1">{unit}</span>}
        </p>
      </CardContent>
    </Card>
  )
}

