import { Switch } from "@components/ui/switch"
import { Label } from "@components/ui/label"
import { Input } from "@components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { SettingsSection } from "./settingsSection"
import type { CommunicationSettings } from "./ICommunitcationSettings"
import type React from "react" // Added import for React

interface PrintSettingsProps {
  settings: CommunicationSettings
  setSettings: React.Dispatch<React.SetStateAction<CommunicationSettings>>
}

export function PrintSettings({ settings, setSettings }: PrintSettingsProps) {
  return (
    <SettingsSection title="Print Settings" description="Configure your printing preferences for invoices and reports.">
      <div className="space-y-4">
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
      </div>
    </SettingsSection>
  )
}

