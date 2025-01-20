import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Label } from "@components/ui/label"
import { Input } from "@components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Switch } from "@components/ui/switch"
import { Globe, Clock, Phone } from "lucide-react"

export function GeneralSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">General Settings</h2>

      <Card>
        <CardHeader>
          <CardTitle>Locale and Time</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Globe className="w-5 h-5 text-gray-500" />
            <div className="flex-1">
              <Label htmlFor="locale">Locale</Label>
              <Select defaultValue="us">
                <SelectTrigger id="locale">
                  <SelectValue placeholder="Select locale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States - Dollar ($) - MM/DD/YYYY</SelectItem>
                  <SelectItem value="uk">United Kingdom - Pound (£) - DD/MM/YYYY</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="w-5 h-5 text-gray-500" />
            <div className="flex-1">
              <Label htmlFor="timezone">Time Zone</Label>
              <Select defaultValue="gmt">
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gmt">GMT-05:00 Central Time (US & Canada)</SelectItem>
                  <SelectItem value="est">GMT-04:00 Eastern Time (US & Canada)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-gray-500" />
            <div className="flex-1">
              <Label htmlFor="phone-format">Phone Number Format</Label>
              <Input id="phone-format" placeholder="(XXX) XXX-XXXX" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="autopay">Enable autopay for customers</Label>
            <Switch id="autopay" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="double-partial">Double partial and prepayments for locked out customers</Label>
            <Switch id="double-partial" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="save-unpaid">Save unpaid customer records</Label>
            <Switch id="save-unpaid" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="auto-acknowledge">Automatically acknowledge new rentals/reservations</Label>
            <Switch id="auto-acknowledge" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

