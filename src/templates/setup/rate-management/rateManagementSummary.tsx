import { useState } from "react"
import { Button } from "@components/ui/button"
import { EnableManagement } from "./enableManagement"
import { ReminderDaySelect } from "./reminderDaySelects"
import { UnitTypePriceRules } from "./unitTypePriceRules"
import { RentalPriceRules } from "./rentalPriceRules"
import { toast } from "@hooks/use-toast"

export function RateManagementSummary() {
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
    <form onSubmit={handleSubmit} className="space-y-8">
      <EnableManagement isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      {isEnabled && (
        <>
          <ReminderDaySelect />
          <UnitTypePriceRules />
          <RentalPriceRules />
        </>
      )}
      <Button type="submit" className="w-full sm:w-auto" size="sm">
        Update Settings
      </Button>
    </form>
  )
}

