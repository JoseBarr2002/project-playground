import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Textarea } from "@components/ui/textarea"
import { Button } from "@components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Checkbox } from "@components/ui/checkbox"
import { Switch } from "@components/ui/switch"
import { AlertCircle, Box, Key, Loader2 } from "lucide-react"

interface NewUnitFormProps {
  isLoading: boolean
  onSubmit: () => void
}

export default function NewUnitForm({ isLoading, onSubmit }: NewUnitFormProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Box className="mr-2" /> Basic Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name or Number</Label>
              <Input id="name" placeholder="A1 or B912" />
              <p className="text-sm text-muted-foreground">A unique name or number for this unit</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="unit-type">Unit Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select unit type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parking">Car and Truck Parking (10 x 20)</SelectItem>
                  <SelectItem value="storage">Storage Unit (5 x 10)</SelectItem>
                  <SelectItem value="rv">RV Parking (12 x 30)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="occupied">Occupied</SelectItem>
                  <SelectItem value="reserved">Reserved</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Key className="mr-2" /> Access Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Gate Groups</Label>
            <div className="flex items-center space-x-2">
              <Checkbox id="renters" />
              <label
                htmlFor="renters"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Renters
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="staff" />
              <label
                htmlFor="staff"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Staff
              </label>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="auto-assign" />
            <Label htmlFor="auto-assign">Automatically Assign Customer Access Code</Label>
          </div>
          <p className="text-sm text-muted-foreground pl-6">
            When enabled, any customer who rents this unit will automatically be assigned an access code.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="mr-2" /> Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Place any notes for managerial use here." />
          </div>
        </CardContent>
      </Card>

      <div className="flex space-x-2">
        <Button onClick={onSubmit} disabled={isLoading} size="sm">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Unit"
          )}
        </Button>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </div>
    </>
  )
}

