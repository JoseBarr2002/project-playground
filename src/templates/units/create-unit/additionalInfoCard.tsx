import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Checkbox } from "@components/ui/checkbox"
import { FileText } from "lucide-react"

export default function AdditionalInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="mr-2" /> Additional Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="availability">Availability</Label>
          <Select>
            <SelectTrigger id="availability">
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="always">Always Available</SelectItem>
              <SelectItem value="limited">Limited Availability</SelectItem>
              <SelectItem value="seasonal">Seasonal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="min-rental-period">Minimum Rental Period</Label>
          <div className="flex items-center space-x-2">
            <Input id="min-rental-period" type="number" min="1" className="w-20" />
            <Select defaultValue="months">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="days">Days</SelectItem>
                <SelectItem value="weeks">Weeks</SelectItem>
                <SelectItem value="months">Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Insurance Required</Label>
          <div className="flex items-center space-x-2">
            <Checkbox id="insurance-required" />
            <label
              htmlFor="insurance-required"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Require insurance for this unit type
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

