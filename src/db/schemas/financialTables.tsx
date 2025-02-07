import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { customersTable } from "./customerTables";
import { rentalsTable } from "./rentalTables";

export const customerBalancesTable = sqliteTable("customer_balances", {
  id: text("id").primaryKey(),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "cascade" }),
  amount: int("amount").notNull(),
  balance: int("balance").notNull(),
  type: text("type", { enum: ["deposit", "payment", "charge", "credit"] }).notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  notes: text("notes"),
  createdBy: text("created_by"),
  referenceId: text("reference_id"),
});

export const invoicesTable = sqliteTable("invoices", {
  id: text("id").primaryKey(),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "restrict" }),
  rentalId: text("rental_id").references(() => rentalsTable.id, { onDelete: "restrict" }),
  billingPeriodStart: text("billing_period_start").notNull(),
  billingPeriodEnd: text("billing_period_end").notNull(),
  amountDue: int("amount_due").notNull(),
  amountPaid: int("amount_paid").notNull().default(0),
  status: text("status", {
    enum: ["draft", "pending", "paid", "overdue", "cancelled", "void"],
  }).notNull(),
  notes: text("notes"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by"),
  lastUpdatedBy: text("last_updated_by"),
}); 