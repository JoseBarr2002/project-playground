import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"

export function NavigationFontSize() {
  return (
    <div className="space-y-2">
      <Label>Navigation Font Size</Label>
      <Input type="number" defaultValue={16} min={12} max={24} />
      <p className="text-sm text-muted-foreground">The font size in pixels to display the navigation menu text.</p>
    </div>
  )
}

