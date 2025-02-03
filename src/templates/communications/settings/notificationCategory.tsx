import { Switch } from "@components/ui/switch"
import { Label } from "@components/ui/label"
import type { NotificationType, NotificationPreference } from "./ICommunitcationSettings"

interface NotificationCategoryProps {
  category: string
  title: string
  notificationTypes: NotificationType[]
  preferences: Record<string, NotificationPreference>
  onPreferenceChange: (typeId: string, channel: "email" | "sms" | "print", value: boolean) => void
  isLoading: boolean
}

export function NotificationCategory({
  category,
  title,
  notificationTypes,
  preferences,
  onPreferenceChange,
  isLoading,
}: NotificationCategoryProps) {
  if (notificationTypes.length === 0) return null

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {notificationTypes.map((type) => {
        const preference = preferences[type.id]
        return (
          <div key={type.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">{type.name}</Label>
                {type.description && <p className="text-sm text-muted-foreground">{type.description}</p>}
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <Switch
                    id={`${type.id}-email`}
                    checked={preference?.email_enabled}
                    onCheckedChange={(checked) => onPreferenceChange(type.id, "email", checked)}
                    disabled={isLoading}
                  />
                  <Label htmlFor={`${type.id}-email`} className="text-xs mt-1">
                    Email
                  </Label>
                </div>
                <div className="flex flex-col items-center">
                  <Switch
                    id={`${type.id}-sms`}
                    checked={preference?.sms_enabled}
                    onCheckedChange={(checked) => onPreferenceChange(type.id, "sms", checked)}
                    disabled={isLoading}
                  />
                  <Label htmlFor={`${type.id}-sms`} className="text-xs mt-1">
                    SMS
                  </Label>
                </div>
                <div className="flex flex-col items-center">
                  <Switch
                    id={`${type.id}-print`}
                    checked={preference?.print_enabled}
                    onCheckedChange={(checked) => onPreferenceChange(type.id, "print", checked)}
                    disabled={isLoading}
                  />
                  <Label htmlFor={`${type.id}-print`} className="text-xs mt-1">
                    Print
                  </Label>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

