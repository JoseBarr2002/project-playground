import { Card, CardContent } from "@components/ui/card"

interface StatsCardProps {
  value: string | number
  label: string
  className?: string
}

export function StatsCard({ value, label, className }: StatsCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-2">
          <div className="text-2xl font-semibold">{value}</div>
          <p className="text-sm text-muted-foreground text-center">{label}</p>
        </div>
      </CardContent>
    </Card>
  )
}

