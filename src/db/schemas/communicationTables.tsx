import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const letterTemplatesTable = sqliteTable("letter_templates", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  emailSubject: text("email_subject"),
  emailContent: text("email_content"),
  smsContent: text("sms_content"),
  postcardContent: text("postcard_content"),
  templateType: text("template_type", {
    enum: ["email_only", "sms_only", "postcard_only", "email_sms", "all"]
  }).notNull(),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  availablePlaceholders: text("available_placeholders"),
  category: text("category", {
    enum: ["payment", "late_notice", "maintenance", "general", "marketing", "legal"]
  }),
  lastUsedAt: text("last_used_at"),
  usageCount: int("usage_count").default(0),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const templateVariablesTable = sqliteTable("template_variables", {
  id: text("id").primaryKey(),
  templateId: text("template_id")
    .notNull()
    .references(() => letterTemplatesTable.id, { onDelete: "cascade" }),
  variableName: text("variable_name").notNull(),
  defaultValue: text("default_value"),
  isRequired: int("is_required", { mode: "boolean" }).default(false),
  description: text("description"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const communicationSettingsTable = sqliteTable("communication_settings", {
  id: text("id").primaryKey(),
  notificationEmail: text("notification_email"),
  replyToEmail: text("reply_to_email"),
  fromEmail: text("from_email"),
  displayName: text("display_name"),
  reminderPeriod: int("reminder_period").default(7),
  notifyCreditCardPayment: int("notify_credit_card_payment", { mode: "boolean" }).default(true),
  notifyTenantVisits: int("notify_tenant_visits", { mode: "boolean" }).default(true),
  printInvoiceBarcodes: int("print_invoice_barcodes", { mode: "boolean" }).default(true),
  printFormat: text("print_format").default("letter"),
  permitNumber: text("permit_number"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const smsMessagesTable = sqliteTable("sms_messages", {
  id: text("id").primaryKey(),
  customerId: text("customer_id").notNull(),
  phoneNumber: text("phone_number").notNull(),
  messageContent: text("message_content").notNull(),
  direction: text("direction", {
    enum: ["outbound", "inbound"]
  }).notNull(),
  status: text("status", {
    enum: ["queued", "sent", "delivered", "failed", "received"]
  }).notNull(),
  thirdPartyMessageId: text("third_party_message_id"),
  errorMessage: text("error_message"),
  sentAt: text("sent_at").default("CURRENT_TIMESTAMP"),
  deliveredAt: text("delivered_at"),
  createdBy: text("created_by").references(() => usersTable.id),
}); 