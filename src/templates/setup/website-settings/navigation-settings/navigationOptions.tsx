import { useState } from "react"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"

export function NavigationOptions() {
  const [showDropdowns, setShowDropdowns] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="show-dropdowns">Enable Dropdown Menus</Label>
      <Switch id="show-dropdowns" checked={showDropdowns} onCheckedChange={setShowDropdowns} />
    </div>
  )
}

