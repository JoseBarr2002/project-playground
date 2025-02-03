import { useState } from "react"
import { Card, CardContent } from "@components/ui/card"
import { updateNotificationPreference } from "./actions"
import { toast } from "@hooks/use-toast"
import type { NotificationType, NotificationPreference } from "./ICommunitcationSettings"
import { NotificationCategory } from "./notificationCategory"
import { SettingsSection } from "./settingsSection"

export function NotificationPreferences() {
  const [isLoading, setIsLoading] = useState(false)
  // TODO: Fetch notification types and preferences from your database
  const [notificationTypes, setNotificationTypes] = useState<NotificationType[]>([
    {
      id: "credit_card_payment",
      name: "Credit Card Payment",
      description: "Notify when a credit card payment is processed",
      category: "payment",
      is_active: true,
    },
    // ... other notification types
  ])

  const [preferences, setPreferences] = useState<Record<string, NotificationPreference>>({
    credit_card_payment: {
      id: "1",
      notification_type_id: "credit_card_payment",
      email_enabled: true,
      sms_enabled: true,
      print_enabled: false,
      created_at: "",
      updated_at: "",
    },
    // ... other preferences
  })

  const categories = {
    payment: "Payment Notifications",
    account: "Account Notifications",
    lease: "Lease Notifications",
    maintenance: "Maintenance Notifications",
    system: "System Notifications",
  }

  const handlePreferenceChange = async (typeId: string, channel: "email" | "sms" | "print", value: boolean) => {
    setIsLoading(true)
    try {
      const updatedPreference = { ...preferences[typeId], [`${channel}_enabled`]: value }
      await updateNotificationPreference(typeId, updatedPreference)
      setPreferences({ ...preferences, [typeId]: updatedPreference })
      toast({
        title: "Success",
        description: "Preference updated successfully",
        variant: "default",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update preference",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <SettingsSection
        title="Notification Preferences"
        description="Choose how you want to be notified for different types of events."
      >
        <CardContent>
          <div className="space-y-6">
            {Object.entries(categories).map(([category, title]) => (
              <NotificationCategory
                key={category}
                category={category as keyof typeof categories}
                title={title}
                notificationTypes={notificationTypes.filter((type) => type.category === category && type.is_active)}
                preferences={preferences}
                onPreferenceChange={handlePreferenceChange}
                isLoading={isLoading}
              />
            ))}
          </div>
        </CardContent>
      </SettingsSection>
    </Card>
  )
}

