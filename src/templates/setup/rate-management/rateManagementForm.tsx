import { useState } from "react"
import { Button } from "@components/ui/button"
import { Card, CardContent } from "@components/ui/card"
import { Checkbox } from "@components/ui/checkbox"
import { Label } from "@components/ui/label"
import { ReminderDaySelect } from "./reminderDaySelect"
import { UnitTypePriceRules } from "./unitTypePriceRules"
import { RentalPriceRules } from "./rentalPriceRules"
import { toast } from "@hooks/use-toast"

export function RateManagementForm() {
  const [isEnabled, setIsEnabled] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast({
      title: "Settings Updated",
      description: "Your rate management settings have been successfully updated.",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <EnableManagement isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      {isEnabled && (
        <>
          <ReminderDaySelect />
          <UnitTypePriceRules />
          <RentalPriceRules />
        </>
      )}
      <Button type="submit" className="bg-[#5b90bf] hover:bg-[#4a7aa3]">
        Update Settings
      </Button>
    </form>
  )
}

function EnableManagement({ isEnabled, setIsEnabled }: { isEnabled: boolean; setIsEnabled: (value: boolean) => void }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="enable-management" className="text-base">
              Rate Management
            </Label>
            <p className="text-sm text-muted-foreground">
              Automate pricing changes according to the conditions you set.
            </p>
          </div>
          <Checkbox id="enable-management" checked={isEnabled} onCheckedChange={setIsEnabled} />
        </div>
      </CardContent>
    </Card>
  )
}

