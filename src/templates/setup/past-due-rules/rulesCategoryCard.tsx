import { Button } from "@components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { Plus } from "lucide-react"
import { RulesTable } from "./rulesTable"

interface RuleCategoryCardProps {
  category: string
  rules: Rule[]
  onAddRule: () => void
  onEditRule: (rule: Rule) => void
  onDeleteRule: (id: string) => void
  onToggleRule: (id: string, enabled: boolean) => void
}

export function RuleCategoryCard({
  category,
  rules,
  onAddRule,
  onEditRule,
  onDeleteRule,
  onToggleRule,
}: RuleCategoryCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="capitalize">{category} Rules</CardTitle>
          <CardDescription>Manage rules for {category} fees and actions</CardDescription>
        </div>
        <Button onClick={onAddRule} size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Rule
        </Button>
      </CardHeader>
      <CardContent>
        <RulesTable rules={rules} onEdit={onEditRule} onDelete={onDeleteRule} onToggle={onToggleRule} />
      </CardContent>
    </Card>
  )
}

