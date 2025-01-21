import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"

interface RuleSummaryCardProps {
  rules: Record<string, Rule[]>
}

export function RuleSummaryCard({ rules }: RuleSummaryCardProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Rule Progression Summary</CardTitle>
        <CardDescription>Overview of your current rule setup</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {Object.entries(rules).map(([category, categoryRules]) => (
            <div key={category} className="flex-1 min-w-[200px] p-4 border rounded-md">
              <h3 className="font-semibold capitalize mb-2">{category}</h3>
              <ul className="list-disc list-inside">
                {categoryRules.map((rule) => (
                  <li key={rule.id} className={rule.enabled ? "" : "text-muted-foreground line-through"}>
                    {rule.daysPastDue} days: {rule.fees}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

