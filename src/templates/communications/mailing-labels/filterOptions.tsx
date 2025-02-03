import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select"

const filterOptions = [
  { value: "active", label: "Active" },
  { value: "current", label: "Current" },
  { value: "recurring", label: "Recurring" },
  { value: "non-recurring", label: "Non-Recurring" },
  { value: "outstanding", label: "Outstanding" },
  { value: "past-due", label: "Past Due" },
  { value: "late", label: "Late" },
  { value: "locked-out", label: "Locked Out" },
  { value: "auction-date", label: "Auction Date Set" },
  { value: "waiting-list", label: "Waiting List" },
  { value: "late-fee-exempt", label: "Late Fee Exempt" },
  { value: "tax-exempt", label: "Tax Exempt" },
  { value: "auto-lockout-disabled", label: "Automatic Lockout Disabled" },
  { value: "archived", label: "Archived" },
  { value: "all", label: "All" },
]

export default function FilterOptions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Options</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Customer Status</label>
          <Select defaultValue="active">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                {filterOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button size="sm" className="w-full">
          Apply Filter
        </Button>
      </CardContent>
    </Card>
  )
}

