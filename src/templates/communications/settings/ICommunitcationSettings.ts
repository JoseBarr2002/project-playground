export type NotificationCategory = "payment" | "account" | "lease" | "maintenance" | "system"
export type PrintFormat = "letter" | "a4" | "legal"

export interface CommunicationSettings {
  id: string
  // Email Settings
  notification_email?: string
  reply_to_email?: string
  from_email?: string
  display_name?: string
  reminder_period: number
  // Text Message Settings
  notify_credit_card_payment: boolean
  notify_tenant_visits: boolean
  // Print Settings
  print_invoice_barcodes: boolean
  print_format: PrintFormat
  permit_number?: string
  // Metadata
  created_at: string
  updated_at: string
  created_by?: string
  last_updated_by?: string
}

export interface NotificationType {
  id: string
  name: string
  description?: string
  category: NotificationCategory
  is_active: boolean
}

export interface NotificationPreference {
  id: string
  notification_type_id: string
  email_enabled: boolean
  sms_enabled: boolean
  print_enabled: boolean
  created_at: string
  updated_at: string
}

export interface UpdateCommunicationSettingsInput {
  notification_email?: string
  reply_to_email?: string
  from_email?: string
  display_name?: string
  reminder_period?: number
  notify_credit_card_payment?: boolean
  notify_tenant_visits?: boolean
  print_invoice_barcodes?: boolean
  print_format?: PrintFormat
  permit_number?: string
}

export interface UpdateNotificationPreferenceInput {
  email_enabled?: boolean
  sms_enabled?: boolean
  print_enabled?: boolean
}

