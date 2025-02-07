import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { unitsTable } from "./unitTables";
import { gateGroupsTable } from "./accessControlTables";

export const unitGateGroupsTable = sqliteTable("unit_gate_groups", {
  unitId: text("unit_id")
    .notNull()
    .references(() => unitsTable.id, { onDelete: "cascade" }),
  gateGroupId: text("gate_group_id")
    .notNull()
    .references(() => gateGroupsTable.id, { onDelete: "cascade" }),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
}); 