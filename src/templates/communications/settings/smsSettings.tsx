import { Switch } from "@components/ui/switch"
import { Label } from "@components/ui/label"
import { SettingsSection } from "./settingsSection"
import type { CommunicationSettings } from "./ICommunitcationSettings"
import type React from "react" // Import React

interface SmsSettingsProps {
  settings: CommunicationSettings
  setSettings: React.Dispatch<React.SetStateAction<CommunicationSettings>>
}

export function SmsSettings({ settings, setSettings }: SmsSettingsProps) {
  return (
    <SettingsSection title="SMS Settings" description="Configure your text message notification preferences.">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="notify-payment">Credit Card Payment Notification</Label>
            <p className="text-sm text-muted-foreground">Receive a text when a credit card payment is processed.</p>
          </div>
          <Switch
            id="notify-payment"
            checked={settings.notify_credit_card_payment}
            onCheckedChange={(checked) => setSettings({ ...settings, notify_credit_card_payment: checked })}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="notify-visits">Tenant Visit Notification</Label>
            <p className="text-sm text-muted-foreground">Receive a text when a tenant visits the online portal.</p>
          </div>
          <Switch
            id="notify-visits"
            checked={settings.notify_tenant_visits}
            onCheckedChange={(checked) => setSettings({ ...settings, notify_tenant_visits: checked })}
          />
        </div>
      </div>
    </SettingsSection>
  )
}

