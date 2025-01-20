import { Card, CardContent } from "@components/ui/card"

interface MetricCardProps {
  title: string
  value: string | number
  subValue?: string
  subText?: string
  trend?: {
    value: number
    label: string
  }
  className?: string
}

export function MetricCard({ title, value, subValue, subText, trend, className }: MetricCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-semibold">{value}</div>
              {subValue && <div className="text-sm text-muted-foreground">{subValue}</div>}
            </div>
            {trend && (
              <div className="flex flex-col items-end gap-1">
                <div
                  className={`flex items-center gap-1 text-sm ${trend.value < 0 ? "text-red-500" : "text-green-500"}`}
                >
                  {trend.value > 0 ? "↑" : "↓"}
                  {Math.abs(trend.value)}%
                </div>
                <div className="text-xs text-muted-foreground">{trend.label}</div>
              </div>
            )}
          </div>
          {subText && <p className="text-xs text-muted-foreground">{subText}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

