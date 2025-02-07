import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { rentalsTable } from "./rentalTables";

export const lateLienRulesTable = sqliteTable("late_lien_rules", {
  id: text("id").primaryKey(),
  status: text("status", {
    enum: ["late", "locked_out", "pre_lien", "lien", "auction"]
  }).notNull(),
  daysPastDue: int("days_past_due").notNull(),
  feeAmount: int("fee_amount").notNull().default(0),
  notificationTypes: text("notification_types").notNull(),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const lateLienEventsTable = sqliteTable("late_lien_events", {
  id: text("id").primaryKey(),
  ruleId: text("rule_id")
    .notNull()
    .references(() => lateLienRulesTable.id),
  rentalId: text("rental_id")
    .notNull()
    .references(() => rentalsTable.id),
  customerId: text("customer_id").notNull(),
  status: text("status").notNull(),
  feeCharged: int("fee_charged").notNull().default(0),
  notificationsSent: text("notifications_sent"),
  processedAt: text("processed_at").default("CURRENT_TIMESTAMP"),
  processedBy: text("processed_by").references(() => usersTable.id),
});

export const rentalPriceChangeBatchesTable = sqliteTable("rental_price_change_batches", {
  id: text("id").primaryKey(),
  monthsSinceUpdate: int("months_since_update"),
  unitTypeId: text("unit_type_id"),
  changeType: text("change_type", {
    enum: ["fixed_amount", "percentage"]
  }).notNull(),
  changeAmount: int("change_amount").notNull(),
  advanceNoticeDays: int("advance_notice_days").notNull(),
  affectedRentalsCount: int("affected_rentals_count").notNull(),
  scheduledDate: text("scheduled_date").notNull(),
  status: text("status", {
    enum: ["scheduled", "in_progress", "completed", "cancelled", "failed"]
  }).notNull(),
  errorMessage: text("error_message"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").notNull().references(() => usersTable.id),
});

export const rentalPriceChangesTable = sqliteTable("rental_price_changes", {
  id: text("id").primaryKey(),
  batchId: text("batch_id")
    .notNull()
    .references(() => rentalPriceChangeBatchesTable.id),
  rentalId: text("rental_id")
    .notNull()
    .references(() => rentalsTable.id),
  oldPrice: int("old_price").notNull(),
  newPrice: int("new_price").notNull(),
  status: text("status", {
    enum: ["pending", "applied", "failed"]
  }).notNull(),
  appliedAt: text("applied_at"),
  errorMessage: text("error_message"),
}); 