import { useState } from "react"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Textarea } from "@components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"

interface RuleFormProps {
  initialData?: Rule
  onSubmit: (data: Rule) => void
  onCancel: () => void
}

export function RuleForm({ initialData, onSubmit, onCancel }: RuleFormProps) {
  const [formData, setFormData] = useState<Rule>(
    initialData || {
      status: "",
      daysPastDue: 0,
      notifications: "",
      fees: "",
      auctionDate: "N/A",
    },
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="daysPastDue">Days Past Due</Label>
        <Input
          id="daysPastDue"
          type="number"
          value={formData.daysPastDue}
          onChange={(e) => setFormData({ ...formData, daysPastDue: Number.parseInt(e.target.value) })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="notifications">Notifications</Label>
        <Textarea
          id="notifications"
          value={formData.notifications}
          onChange={(e) => setFormData({ ...formData, notifications: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fees">Fees</Label>
        <Input
          id="fees"
          value={formData.fees}
          onChange={(e) => setFormData({ ...formData, fees: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="auctionDate">Auction Date</Label>
        <Input
          id="auctionDate"
          value={formData.auctionDate}
          onChange={(e) => setFormData({ ...formData, auctionDate: e.target.value })}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}

