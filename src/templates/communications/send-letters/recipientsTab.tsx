import { Button } from "@components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Badge } from "@components/ui/badge"

interface RecipientsTabProps {
  recipients: string[]
  onAddRecipient: (recipient: string) => void
  onRemoveRecipient: (recipient: string) => void
}

export default function RecipientsTab({ recipients, onAddRecipient, onRemoveRecipient }: RecipientsTabProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>From:</Label>
          <Input value="110 Mini Storage <noreply@email-notifications.net>" disabled />
        </div>
        <div className="space-y-2">
          <Label>Reply to:</Label>
          <div className="flex items-center space-x-2">
            <Input value="110MiniStorage@gmail.com" disabled />
            <Button variant="link" className="text-blue-500">
              change
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4 border rounded-lg p-4">
        <div className="space-y-2">
          <Label className="text-base font-semibold">Customer Selection</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter customers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active Customers</SelectItem>
              <SelectItem value="inactive">Inactive Customers</SelectItem>
              <SelectItem value="all">All Customers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Select onValueChange={onAddRecipient}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Select customers to add" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer1@example.com">Customer 1</SelectItem>
              <SelectItem value="customer2@example.com">Customer 2</SelectItem>
              <SelectItem value="customer3@example.com">Customer 3</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => onAddRecipient("customer@example.com")}>Add</Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {recipients.map((recipient, index) => (
            <Badge key={index} variant="secondary" className="text-sm py-1 px-2">
              {recipient}
              <button className="ml-2 text-red-500 hover:text-red-700" onClick={() => onRemoveRecipient(recipient)}>
                ×
              </button>
            </Badge>
          ))}
        </div>

        <div className="flex space-x-2">
          <Button variant="secondary" className="bg-teal-500 text-white hover:bg-teal-600">
            Add All Filtered
          </Button>
          <Button variant="destructive" onClick={() => onRemoveRecipient("")}>
            Remove All
          </Button>
        </div>
      </div>
    </div>
  )
}

