import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"
import { Checkbox } from "@components/ui/checkbox"

export function CustomerSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Customer Settings</h2>

      <Card>
        <CardHeader>
          <CardTitle>Customer Permissions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="customer-edit">Customers Can Edit Profile Information</Label>
            <Switch id="customer-edit" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="customer-billing">Customers Can Edit Billing Information</Label>
            <Switch id="customer-billing" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="customer-schedule">Customers Can Schedule Move Out</Label>
            <Switch id="customer-schedule" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customer Communication</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Enable Email Notifications</Label>
            <Switch id="email-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications">Enable SMS Notifications</Label>
            <Switch id="sms-notifications" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing-consent" />
            <Label htmlFor="marketing-consent">Allow Marketing Communications</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

