import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"

export default function NavigationSettings() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold border-b pb-2">Navigation Settings</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="tab-name">Menu Label</Label>
          <Input id="tab-name" placeholder="Enter menu label" />
          <p className="text-sm text-muted-foreground">Text shown in the navigation menu</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tab-visibility">Menu Placement</Label>
          <Select>
            <SelectTrigger id="tab-visibility">
              <SelectValue placeholder="Select menu placement" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="main">Main Menu</SelectItem>
              <SelectItem value="footer">Footer Menu</SelectItem>
              <SelectItem value="hidden">Hidden</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

