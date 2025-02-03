import { useState } from "react"
import { Card, CardContent, CardFooter } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { EmailSettings } from "./emailSettings"
import { SmsSettings } from "./smsSettings"
import { PrintSettings } from "./printSettings"
import { updateCommunicationSettings } from "./actions"
import { toast } from "@hooks/use-toast"
import type { CommunicationSettings } from "./ICommunitcationSettings"
import type React from "react" // Added import for React

export function GeneralSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [settings, setSettings] = useState<CommunicationSettings>({
    id: "1",
    notification_email: "",
    reply_to_email: "",
    from_email: "",
    display_name: "",
    reminder_period: 7,
    notify_credit_card_payment: true,
    notify_tenant_visits: true,
    print_invoice_barcodes: true,
    print_format: "letter",
    permit_number: "",
    created_at: "",
    updated_at: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await updateCommunicationSettings(settings)
      toast({
        title: "Settings updated successfully",
      })
    } catch (error) {
      toast({
        title: "Failed to update settings",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="space-y-6">
          <EmailSettings settings={settings} setSettings={setSettings} />
          <SmsSettings settings={settings} setSettings={setSettings} />
          <PrintSettings settings={settings} setSettings={setSettings} />
        </CardContent>
        <CardFooter>
          <Button size="sm" type="submit" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Settings"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

