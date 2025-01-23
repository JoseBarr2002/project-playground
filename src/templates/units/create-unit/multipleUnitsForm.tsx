import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Button } from "@components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Checkbox } from "@components/ui/checkbox"
import { Separator } from "@components/ui/separator"
import { Badge } from "@components/ui/badge"
import { Boxes, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert"

interface MultipleUnitsFormProps {
  isLoading: boolean
  onSubmit: () => void
}

export default function MultipleUnitsForm({ isLoading, onSubmit }: MultipleUnitsFormProps) {
  const [previewUnits, setPreviewUnits] = useState<string[]>([])

  const handlePreviewUnits = () => {
    const unitNames = document.getElementById("names") as HTMLInputElement
    if (unitNames) {
      const units = unitNames.value.split(",").flatMap((range) => {
        const [start, end] = range.trim().split("-")
        if (end) {
          const letter = start.match(/[A-Za-z]+/)?.[0] || ""
          const startNum = Number.parseInt(start.match(/\d+/)?.[0] || "0")
          const endNum = Number.parseInt(end.match(/\d+/)?.[0] || "0")
          return Array.from({ length: endNum - startNum + 1 }, (_, i) => `${letter}${startNum + i}`)
        }
        return [start.trim()]
      })
      setPreviewUnits(units)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Boxes className="mr-2" /> Batch Creation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="names">Names</Label>
            <Input id="names" placeholder="A1-3, 5B-7" />
            <p className="text-sm text-muted-foreground">
              Use a comma to separate multiple ranges. Use a number range with a dash in-between to create multiple
              units in a row. Letters can be used before or after the first number in each range.
            </p>
            <p className="text-sm text-muted-foreground">
              Example: A1-3, 5B-7 will create 6 units (A1, A2, A3, 5B, 6B, 7B)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="unit-type-multi">Unit Type</Label>
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
            <Label htmlFor="status-multi">Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="reserved">Reserved</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Gate Groups</Label>
            <div className="flex items-center space-x-2">
              <Checkbox id="renters-multi" />
              <label htmlFor="renters-multi" className="text-sm font-medium leading-none">
                Renters
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="staff-multi" />
              <label htmlFor="staff-multi" className="text-sm font-medium leading-none">
                Staff
              </label>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <Button onClick={handlePreviewUnits} size="sm">
          Preview
        </Button>

        {previewUnits.length > 0 && (
          <Alert>
            <AlertTitle>Preview of Units to be Created</AlertTitle>
            <AlertDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                {previewUnits.map((unit, index) => (
                  <Badge key={index} variant="outline">
                    {unit}
                  </Badge>
                ))}
              </div>
            </AlertDescription>
          </Alert>
        )}

        <Button onClick={onSubmit} disabled={isLoading} size="sm">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Units"
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

