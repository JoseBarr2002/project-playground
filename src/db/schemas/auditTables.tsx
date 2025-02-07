import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const auditLogsTable = sqliteTable("audit_logs", {
  id: text("id").primaryKey(),
  entityType: text("entity_type").notNull(),
  entityId: text("entity_id").notNull(),
  action: text("action", {
    enum: ["create", "update", "delete", "view"]
  }).notNull(),
  oldValues: text("old_values"),
  newValues: text("new_values"),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  timestamp: text("timestamp").default("CURRENT_TIMESTAMP"),
  performedBy: text("performed_by").references(() => usersTable.id),
}); 