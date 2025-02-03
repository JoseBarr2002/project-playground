import { Button } from "@components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Label } from "@components/ui/label"

interface TemplateTabProps {
  onTemplateSelect: (template: string) => void
}

export default function TemplateTab({ onTemplateSelect }: TemplateTabProps) {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Label className="text-base font-semibold">Email Template</Label>
          <p className="text-sm text-muted-foreground">Choose a template or create a custom email</p>
        </div>
        <Button variant="secondary">Browse Templates</Button>
      </div>

      <Select onValueChange={onTemplateSelect}>
        <SelectTrigger>
          <SelectValue placeholder="Select template" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="custom">Custom Email</SelectItem>
          <SelectItem value="welcome">Welcome Email</SelectItem>
          <SelectItem value="payment">Payment Reminder</SelectItem>
          <SelectItem value="notice">Important Notice</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

