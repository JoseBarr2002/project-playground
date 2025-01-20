import { Card, CardContent } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"

export default function PhysicalAddress() {
  return (
    <Card>
      <CardContent className="p-6 grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="physical-address">Street Address</Label>
          <Input id="physical-address" defaultValue="1234 Main St" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="physical-city">City</Label>
            <Input id="physical-city" defaultValue="Tyler" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="physical-zip">ZIP Code</Label>
            <Input id="physical-zip" defaultValue="75703" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="physical-state">State</Label>
          <Select defaultValue="texas">
            <SelectTrigger id="physical-state">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="texas">Texas</SelectItem>
              {/* Add other states as needed */}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}

