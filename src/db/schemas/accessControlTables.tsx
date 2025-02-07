import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { customersTable } from "./customerTables";

export const gatesTable = sqliteTable("gates", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  accessName: text("access_name"),
  gateType: text("gate_type", {
    enum: ["keypad", "card_reader", "mobile_access", "remote"]
  }).notNull(),
  status: text("status", {
    enum: ["active", "inactive", "maintenance"]
  }).notNull().default("active"),
  phoneNumber: text("phone_number"),
  cloudNodeId: text("cloud_node_id"),
  requiresAccessName: int("requires_access_name", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const gateGroupsTable = sqliteTable("gate_groups", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const gateAccessCodesTable = sqliteTable("gate_access_codes", {
  id: text("id").primaryKey(),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "cascade" }),
  accessCode: text("access_code").notNull(),
  isTemporary: int("is_temporary", { mode: "boolean" }).default(false),
  validFrom: text("valid_from"),
  validUntil: text("valid_until"),
  status: text("status", {
    enum: ["active", "inactive", "expired", "revoked"]
  }).notNull().default("active"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const gateActivityLogsTable = sqliteTable("gate_activity_logs", {
  id: text("id").primaryKey(),
  gateId: text("gate_id")
    .notNull()
    .references(() => gatesTable.id),
  customerId: text("customer_id").references(() => customersTable.id),
  accessCodeId: text("access_code_id").references(() => gateAccessCodesTable.id),
  activityType: text("activity_type", {
    enum: ["entry", "exit", "denied", "maintenance", "emergency"]
  }).notNull(),
  accessMethod: text("access_method", {
    enum: ["keypad", "card", "mobile", "remote", "manual"]
  }).notNull(),
  timestamp: text("timestamp").default("CURRENT_TIMESTAMP"),
  success: int("success", { mode: "boolean" }).notNull(),
  failureReason: text("failure_reason"),
});

export const gateGroupGatesTable = sqliteTable("gate_group_gates", {
  gateGroupId: text("gate_group_id")
    .notNull()
    .references(() => gateGroupsTable.id, { onDelete: "cascade" }),
  gateId: text("gate_id")
    .notNull()
    .references(() => gatesTable.id, { onDelete: "cascade" }),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
}); 