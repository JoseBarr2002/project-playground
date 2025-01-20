import { useState } from "react"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"

export function OfficeHoursOptions() {
  const [showHolidays, setShowHolidays] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="show-holidays">Show Holiday Hours</Label>
      <Switch id="show-holidays" checked={showHolidays} onCheckedChange={setShowHolidays} />
    </div>
  )
}

