import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Label } from "@components/ui/label"
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group"
import { Switch } from "@components/ui/switch"

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Security Settings</h2>

      <Card>
        <CardHeader>
          <CardTitle>Lockout Approval</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="auto" className="space-y-4">
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="auto" id="auto" className="mt-1" />
              <Label htmlFor="auto" className="leading-tight">
                Require approval for automatic lockout removal
                <p className="text-sm text-muted-foreground mt-1">
                  When this option is enabled, automatic lockout removal will require manager approval
                </p>
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="manual" id="manual" className="mt-1" />
              <Label htmlFor="manual" className="leading-tight">
                Require approval for manual lockout removal
                <p className="text-sm text-muted-foreground mt-1">
                  When this option is enabled, manual lockout removal will require manager approval
                </p>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
            <Switch id="2fa" />
          </div>
          <p className="text-sm text-muted-foreground">
            Enhance your account security by enabling two-factor authentication.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

