import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { customersTable } from "./customerTables";

export const insurancePoliciesTable = sqliteTable("insurance_policies", {
  id: text("id").primaryKey(),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id),
  policyNumber: text("policy_number").notNull(),
  provider: text("provider").notNull(),
  coverageAmount: int("coverage_amount").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  status: text("status", {
    enum: ["active", "expired", "cancelled"]
  }).notNull().default("active"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 