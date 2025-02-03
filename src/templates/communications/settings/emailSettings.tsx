import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { SettingsSection } from "./settingsSection"
import type { CommunicationSettings } from "./ICommunitcationSettings"
import type React from "react" // Import React

interface EmailSettingsProps {
  settings: CommunicationSettings
  setSettings: React.Dispatch<React.SetStateAction<CommunicationSettings>>
}

export function EmailSettings({ settings, setSettings }: EmailSettingsProps) {
  return (
    <SettingsSection title="Email Settings" description="Configure your email communication preferences.">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="notification-email">Notification Email</Label>
          <Input
            id="notification-email"
            value={settings.notification_email}
            onChange={(e) => setSettings({ ...settings, notification_email: e.target.value })}
            placeholder="notifications@example.com"
            type="email"
          />
          <p className="text-sm text-muted-foreground">All notifications will be sent to this email address.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reply-email">Reply-to Email</Label>
          <Input
            id="reply-email"
            value={settings.reply_to_email}
            onChange={(e) => setSettings({ ...settings, reply_to_email: e.target.value })}
            placeholder="support@example.com"
            type="email"
          />
          <p className="text-sm text-muted-foreground">Responses to automated emails will be sent to this address.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="from-email">From Email</Label>
          <Input
            id="from-email"
            value={settings.from_email}
            onChange={(e) => setSettings({ ...settings, from_email: e.target.value })}
            placeholder="noreply@example.com"
            type="email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="display-name">Display Name</Label>
          <Input
            id="display-name"
            value={settings.display_name}
            onChange={(e) => setSettings({ ...settings, display_name: e.target.value })}
            placeholder="Your Company Name"
          />
          <p className="text-sm text-muted-foreground">This name will appear as the sender for all outgoing emails.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reminder-period">Reminder Period (days)</Label>
          <Input
            id="reminder-period"
            type="number"
            min="1"
            value={settings.reminder_period}
            onChange={(e) => setSettings({ ...settings, reminder_period: Number.parseInt(e.target.value) })}
          />
          <p className="text-sm text-muted-foreground">Number of days before the due date to send a reminder.</p>
        </div>
      </div>
    </SettingsSection>
  )
}

