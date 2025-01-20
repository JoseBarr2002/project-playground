import { useState } from "react"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"
import { Input } from "@components/ui/input"

export function ColorCustomization() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Color Customization</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
        <div className="grid gap-2">
          <Label>Primary Color</Label>
          <div className="flex items-center gap-4">
            <Input type="color" className="h-10 w-20" />
            <p className="text-sm text-muted-foreground flex-1">
              Styles title text, buttons, checkmarks, and footer background
            </p>
          </div>
        </div>
        <div className="grid gap-2">
          <Label>Secondary Color</Label>
          <div className="flex items-center gap-4">
            <Input type="color" className="h-10 w-20" />
            <p className="text-sm text-muted-foreground flex-1">Styles icons in widgets and overlay text</p>
          </div>
        </div>
      </div>
    </div>
  )
}

