import { useState } from "react"
import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Checkbox } from "@components/ui/checkbox"
import { Label } from "@components/ui/label"
import { Input } from "@components/ui/input"
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group"
import { Badge } from "@components/ui/badge"

interface UnitType {
  id: string
  name: string
  size: string
  occupancy: number
  selected?: boolean
}

export function UnitTypePriceRules() {
  const [amount, setAmount] = useState<string>("")
  const [targetType, setTargetType] = useState("all")
  const [occupancyThreshold, setOccupancyThreshold] = useState<string>("")
  const [selectedUnits, setSelectedUnits] = useState<UnitType[]>([
    { id: "1", name: "Car and Truck Parking", size: "14 x 45", occupancy: 85 },
    { id: "2", name: "Park It Lock It", size: "10 x 20", occupancy: 90 },
    { id: "3", name: "Storage Unit", size: "5 x 5", occupancy: 75 },
    { id: "4", name: "RV (Self Contained)", size: "12 x 40", occupancy: 80 },
    { id: "5", name: "Storage Unit", size: "10 x 15", occupancy: 95 },
    { id: "6", name: "Climate Unit", size: "10 x 10", occupancy: 88 },
  ])

  const toggleUnitSelection = (unitId: string) => {
    setSelectedUnits((prev) => prev.map((unit) => (unit.id === unitId ? { ...unit, selected: !unit.selected } : unit)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unit Type Price Change Rules</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Unit type price change rules are evaluated based upon the percentage occupancy of the given Unit Type(s). e.g.
          Apply a 3% increase to Unit Type Price when the 10x10 Unit Type hits 85%.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="increase-amount" className="min-w-[200px]">
              Increase Monthly Unit Type Price By
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="increase-amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-24"
              />
              <span>%</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Label className="min-w-[200px]">When Occupancy Has Met Or Exceeded</Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={occupancyThreshold}
                onChange={(e) => setOccupancyThreshold(e.target.value)}
                className="w-24"
              />
              <span>%</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Applies To:</Label>
          <RadioGroup value={targetType} onValueChange={setTargetType} className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all-types" />
              <Label htmlFor="all-types">All Unit Types</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="specific" id="specific-types" />
              <Label htmlFor="specific-types">Specific Unit Types</Label>
            </div>
          </RadioGroup>
        </div>

        {targetType === "specific" && (
          <div className="grid grid-cols-2 gap-2">
            {selectedUnits.map((unit) => (
              <Button
                key={unit.id}
                variant={unit.selected ? "default" : "outline"}
                className="justify-start h-auto py-2 px-3 w-full sm:w-auto"
                onClick={() => toggleUnitSelection(unit.id)}
              >
                <div className="text-left">
                  <div className="font-medium">
                    {unit.name} ({unit.size})
                  </div>
                  <div className="text-sm text-muted-foreground">Occupancy: {unit.occupancy}%</div>
                </div>
              </Button>
            ))}
          </div>
        )}

        <div className="flex items-center space-x-2">
          <Checkbox id="round-unit-price" />
          <Label htmlFor="round-unit-price">Round Unit Type Price to the Nearest Dollar</Label>
        </div>
        <p className="text-sm text-muted-foreground">
          Round all increases to the nearest whole dollar. This only applies to rules using the Percentage type change.
        </p>
      </CardContent>
    </Card>
  )
}

