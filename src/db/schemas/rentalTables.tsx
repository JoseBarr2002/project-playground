import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { customersTable } from "./customerTables";
import { unitsTable } from "./unitTables";
import { usersTable } from "./userTables";

export const rentalsTable = sqliteTable("rentals", {
  id: text("id").primaryKey(),
  unitId: text("unit_id")
    .notNull()
    .references(() => unitsTable.id, { onDelete: "restrict" }),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "restrict" }),
  moveInDate: text("move_in_date").notNull(),
  moveOutDate: text("move_out_date"),
  depositPaid: int("deposit_paid").notNull().default(0),
  depositRefunded: int("deposit_refunded").default(0),
  depositRefundDate: text("deposit_refund_date"),
  rentalRate: int("rental_rate").notNull(),
  status: text("status", {
    enum: ["pending", "active", "terminated", "evicted", "completed"]
  }).notNull(),
  leaseTerm: int("lease_term"),
  autoRenew: int("auto_renew", { mode: "boolean" }).default(true),
  notes: text("notes"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
  terminatedAt: text("terminated_at"),
  terminatedBy: text("terminated_by").references(() => usersTable.id),
  terminationReason: text("termination_reason"),
});

export const scheduledActionsTable = sqliteTable("scheduled_actions", {
  id: text("id").primaryKey(),
  actionType: text("action_type", {
    enum: ["move_out", "inspection", "maintenance", "rate_change", "lease_renewal"]
  }).notNull(),
  rentalId: text("rental_id")
    .notNull()
    .references(() => rentalsTable.id, { onDelete: "cascade" }),
  scheduledDate: text("scheduled_date").notNull(),
  notes: text("notes"),
  status: text("status", {
    enum: ["pending", "completed", "cancelled", "finalized"]
  }).notNull(),
  completedAt: text("completed_at"),
  completedBy: text("completed_by").references(() => usersTable.id),
  cancelledAt: text("cancelled_at"),
  cancelledBy: text("cancelled_by").references(() => usersTable.id),
  cancellationReason: text("cancellation_reason"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 