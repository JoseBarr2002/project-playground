import { useState } from "react"
import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Checkbox } from "@components/ui/checkbox"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group"

interface UnitType {
  id: string
  name: string
  size: string
  lastChange: string
  selected?: boolean
}

export function RentalPriceRules() {
  const [amount, setAmount] = useState<string>("")
  const [months, setMonths] = useState<string>("")
  const [advanceNotice, setAdvanceNotice] = useState<string>("")
  const [targetType, setTargetType] = useState("all")
  const [selectedUnits, setSelectedUnits] = useState<UnitType[]>([
    { id: "1", name: "Car and Truck Parking", size: "14 x 45", lastChange: "3 months ago" },
    { id: "2", name: "Park It Lock It", size: "10 x 20", lastChange: "6 months ago" },
    { id: "3", name: "Storage Unit", size: "5 x 5", lastChange: "2 months ago" },
    { id: "4", name: "RV (Self Contained)", size: "12 x 40", lastChange: "4 months ago" },
    { id: "5", name: "Storage Unit", size: "10 x 15", lastChange: "5 months ago" },
    { id: "6", name: "Climate Unit", size: "10 x 10", lastChange: "1 month ago" },
  ])

  const toggleUnitSelection = (unitId: string) => {
    setSelectedUnits((prev) => prev.map((unit) => (unit.id === unitId ? { ...unit, selected: !unit.selected } : unit)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rental Price Change Rules</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Rental price change rules are evaluated based upon the number of months since the last rate change of a given
          rental. e.g. Apply a 3% increase when a rental has gone 6 months without a rate change.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="advance-notice" className="min-w-[200px]">
              Advance Notice
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="advance-notice"
                type="number"
                value={advanceNotice}
                onChange={(e) => setAdvanceNotice(e.target.value)}
                className="w-24"
              />
              <span>Days</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground pl-[200px]">
            Number of days prior to the actual rate change the tenant should be notified.
          </p>

          <div className="flex items-center gap-4">
            <Label htmlFor="increase-amount" className="min-w-[200px]">
              Increase Monthly Rental Price By
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
            <Label className="min-w-[200px]">When Price Hasn't Changed In</Label>
            <div className="flex items-center gap-2">
              <Input type="number" value={months} onChange={(e) => setMonths(e.target.value)} className="w-24" />
              <span>Months</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Applies To:</Label>
          <RadioGroup value={targetType} onValueChange={setTargetType} className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all-types-rental" />
              <Label htmlFor="all-types-rental">All Unit Types</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="specific" id="specific-types-rental" />
              <Label htmlFor="specific-types-rental">Specific Unit Types</Label>
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
                  <div className="text-sm text-muted-foreground">Last changed: {unit.lastChange}</div>
                </div>
              </Button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="round-rental-price" />
            <Label htmlFor="round-rental-price">Round Rental Price to the Nearest Dollar</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="exceed-street-rate" />
            <Label htmlFor="exceed-street-rate">Rental Price Increases Can Exceed "Street Rate"</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

