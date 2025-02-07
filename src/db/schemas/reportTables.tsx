import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const savedReportsTable = sqliteTable("saved_reports", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  reportType: text("report_type").notNull(),
  parameters: text("parameters"),
  schedule: text("schedule"),
  lastRun: text("last_run"),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const reportExecutionsTable = sqliteTable("report_executions", {
  id: text("id").primaryKey(),
  reportId: text("report_id")
    .notNull()
    .references(() => savedReportsTable.id),
  status: text("status", {
    enum: ["pending", "running", "completed", "failed"]
  }).notNull(),
  startTime: text("start_time").default("CURRENT_TIMESTAMP"),
  endTime: text("end_time"),
  resultPath: text("result_path"),
  errorMessage: text("error_message"),
  executedBy: text("executed_by").references(() => usersTable.id),
}); 