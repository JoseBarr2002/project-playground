import { Card, CardContent } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Switch } from "@components/ui/switch"

interface BillingAddressProps {
  sameBillingAddress: boolean
  setSameBillingAddress: (value: boolean) => void
}

export default function BillingAddress({ sameBillingAddress, setSameBillingAddress }: BillingAddressProps) {
  return (
    <Card>
      <CardContent className="p-6 grid gap-4">
        <div className="flex items-center space-x-2 mb-4">
          <Switch id="same-address" checked={sameBillingAddress} onCheckedChange={setSameBillingAddress} />
          <Label htmlFor="same-address">Same as Physical Address</Label>
        </div>
        {!sameBillingAddress && (
          <>
            <div className="space-y-2">
              <Label htmlFor="billing-address">Street Address</Label>
              <Input id="billing-address" defaultValue="`17814 CR 122`" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="billing-city">City</Label>
                <Input id="billing-city" defaultValue="Tyler" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-zip">ZIP Code</Label>
                <Input id="billing-zip" defaultValue="75703" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-state">State</Label>
              <Select defaultValue="texas">
                <SelectTrigger id="billing-state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="texas">Texas</SelectItem>
                  {/* Add other states as needed */}
                </SelectContent>
              </Select>
            </div>
          </>
        )}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" defaultValue="903-000-1111" />
        </div>
      </CardContent>
    </Card>
  )
}

