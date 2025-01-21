import { Switch } from "@components/ui/switch"
import { Label } from "@components/ui/label"

interface EnableManagementProps {
  isEnabled: boolean
  setIsEnabled: (value: boolean) => void
}

export function EnableManagement({ isEnabled, setIsEnabled }: EnableManagementProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
      <div className="space-y-0.5">
        <Label htmlFor="enable-management" className="text-base font-semibold">
          Rate Management
        </Label>
        <p className="text-sm text-muted-foreground">Automate pricing changes according to the conditions you set.</p>
      </div>
      <Switch id="enable-management" checked={isEnabled} onCheckedChange={setIsEnabled} />
    </div>
  )
}

