import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const settingsTable = sqliteTable("settings", {
  id: text("id").primaryKey(),
  locale: text("locale", {
    enum: [
      "United States - Dollar ($) - MM/DD/YYYY",
      "Australia - Dollar ($) - DD-MM-YYYY",
      "Canada - Dollar (C$) - YYYY-MM-DD",
      "Great Britain - Pound (£) - DD-MM-YYYY",
      "Guatemala - Quetzal (Q) - DD/MM/YYYY",
      "European Union - Euro (€) - DD/MM/YYYY",
      "South Africa - Rand (R) - YYYY-MM-DD",
      "Malaysia - Ringgit (RM) - DD.MM.YYYY",
      "Other - No Currency - DD/MM/YYYY"
    ]
  }).notNull().default("United States - Dollar ($) - MM/DD/YYYY"),
  billingPeriod: int("billing_period").notNull().default(1),
  timeZone: text("time_zone").notNull().default("GMT-05:00 Eastern Time (US & Canada)"),
  phoneNumberFormat: text("phone_number_format", {
    enum: [
      "(XXX) XXX-XXXX",
      "XXX-XXX-XXXX",
      "XXX.XXX.XXXX",
      "XXXXXXXXXX",
      "+X XXX XXX XXXX",
      "+XX XXX XXX XXXX"
    ]
  }).notNull().default("(XXX) XXX-XXXX"),
  unitDimensionFormat: text("unit_dimension_format", {
    enum: [
      'W" x L" x H"',
      "L x W x H",
      "Width x Length x Height",
      "W × L × H",
      "W/L/H"
    ]
  }).notNull().default('W" x L" x H"'),
  enableStorageForCustomers: int("enable_storage_for_customers", { mode: "boolean" }).default(true),
  enablePartialPrepayments: int("enable_partial_prepayments", { mode: "boolean" }).default(true),
  saveUnsentCustomerEmails: int("save_unsent_customer_emails", { mode: "boolean" }).default(true),
  autoAcknowledgeRentals: int("auto_acknowledge_rentals", { mode: "boolean" }).default(true),
  enableAdditionalDeposits: int("enable_additional_deposits", { mode: "boolean" }).default(true),
  customersCanEditProfile: int("customers_can_edit_profile", { mode: "boolean" }).default(true),
  customersCanEditBilling: int("customers_can_edit_billing", { mode: "boolean" }).default(true),
  customersCanScheduleMoveOut: int("customers_can_schedule_move_out", { mode: "boolean" }).default(true),
  requireApprovalAutomaticLockout: int("require_approval_automatic_lockout", { mode: "boolean" }).default(true),
  requireApprovalManualLockout: int("require_approval_manual_lockout", { mode: "boolean" }).default(true),
  reservationLimit: int("reservation_limit").default(0),
  customerRentalPreviewMonths: int("customer_rental_preview_months").default(3),
  defaultPreviewMonths: int("default_preview_months").default(3),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 