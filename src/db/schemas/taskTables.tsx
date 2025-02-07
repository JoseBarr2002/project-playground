import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const tasksTable = sqliteTable("tasks", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  dueDate: text("due_date"),
  status: text("status", {
    enum: ["pending", "in_progress", "completed", "cancelled", "overdue"]
  }).notNull().default("pending"),
  priority: text("priority", {
    enum: ["low", "medium", "high", "urgent"]
  }).default("medium"),
  assignedTo: text("assigned_to").references(() => usersTable.id),
  assignedBy: text("assigned_by").references(() => usersTable.id),
  completedAt: text("completed_at"),
  completedBy: text("completed_by").references(() => usersTable.id),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const taskRelationshipsTable = sqliteTable("task_relationships", {
  parentTaskId: text("parent_task_id")
    .notNull()
    .references(() => tasksTable.id, { onDelete: "cascade" }),
  childTaskId: text("child_task_id")
    .notNull()
    .references(() => tasksTable.id, { onDelete: "cascade" }),
  relationshipType: text("relationship_type", {
    enum: ["subtask", "blocker", "related"]
  }),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
}); 