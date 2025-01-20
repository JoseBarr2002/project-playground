import { useState } from "react"
import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Slider } from "@components/ui/slider"

export function FontCustomization() {
  const [fontSize, setFontSize] = useState(16)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Font Customization</h3>
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label>Header Fonts</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Default (sans-serif)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sans-serif">Default (sans-serif)</SelectItem>
              <SelectItem value="serif">Serif</SelectItem>
              <SelectItem value="mono">Monospace</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Body Fonts</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Default (sans-serif)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sans-serif">Default (sans-serif)</SelectItem>
              <SelectItem value="serif">Serif</SelectItem>
              <SelectItem value="mono">Monospace</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Base Font Size: {fontSize}px</Label>
          <Slider min={12} max={24} step={1} value={[fontSize]} onValueChange={(value) => setFontSize(value[0])} />
        </div>
      </div>
    </div>
  )
}

