import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"
import { Button } from "@components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { updateCommunicationSettings } from "./actions"
import { toast } from "@hooks/use-toast"
import type React from "react" // Added import for React

export function GeneralSettings() {
  const [isLoading, setIsLoading] = useState(false)
  // TODO: Fetch initial data from your database
  const [settings, setSettings] = useState({
    notification_email: "",
    reply_to_email: "",
    from_email: "",
    display_name: "",
    reminder_period: 7,
    notify_credit_card_payment: true,
    notify_tenant_visits: true,
    print_invoice_barcodes: true,
    print_format: "letter" as const,
    permit_number: "",
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
        <CardHeader>
          <CardTitle>Email Settings</CardTitle>
          <CardDescription>Configure your email communication preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
            <p className="text-sm text-muted-foreground">
              This name will appear as the sender for all outgoing emails.
            </p>
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
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>SMS Settings</CardTitle>
          <CardDescription>Configure your text message notification preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Print Settings</CardTitle>
          <CardDescription>Configure your printing preferences for invoices and reports.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="print-barcodes">Print Invoice Barcodes</Label>
              <p className="text-sm text-muted-foreground">Include barcodes on printed invoices for easy scanning.</p>
            </div>
            <Switch
              id="print-barcodes"
              checked={settings.print_invoice_barcodes}
              onCheckedChange={(checked) => setSettings({ ...settings, print_invoice_barcodes: checked })}
            />
          </div>
          <div className="space-y-2">
            <Label>Print Format</Label>
            <Select
              value={settings.print_format}
              onValueChange={(value) => setSettings({ ...settings, print_format: value as "letter" | "legal" | "a4" })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="letter">Letter (US Standard)</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="a4">A4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="permit-number">Permit Number</Label>
            <Input
              id="permit-number"
              value={settings.permit_number}
              onChange={(e) => setSettings({ ...settings, permit_number: e.target.value })}
              placeholder="Enter permit number"
            />
            <p className="text-sm text-muted-foreground">
              If applicable, enter your business permit number to be included on printed documents.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Settings"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

