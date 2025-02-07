import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { customersTable } from "./customerTables";

export const customerAdditionalAccessTable = sqliteTable("customer_additional_access", {
  id: text("id").primaryKey(),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "cascade" }),
  name: text("name"),
  phoneNumber: text("phone_number"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const customerBoatsTable = sqliteTable("customer_boats", {
  id: text("id").primaryKey(),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "cascade" }),
  txNumber: text("tx_number"),
  hinOrSerialNumber: text("hin_or_serial_number"),
  makeModelYearBuilt: text("make_model_year_built"),
  estimatedValueCents: int("estimated_value_cents").default(0),
  length: int("length").default(0),
  homePort: text("home_port"),
  name: text("name"),
  documentation: text("documentation"),
  isTenantRegisteredOwner: int("is_tenant_registered_owner", { mode: "boolean" }).default(false),
  registeredOwnerName: text("registered_owner_name"),
  registeredOwnerAddress: text("registered_owner_address"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const customerBoatMotorsTable = sqliteTable("customer_boat_motors", {
  id: text("id").primaryKey(),
  boatId: text("boat_id")
    .notNull()
    .references(() => customerBoatsTable.id, { onDelete: "cascade" }),
  minOrSerialNumber: text("min_or_serial_number"),
  horsePower: int("horse_power").default(0),
  make: text("make"),
  type: text("type"),
  estimatedValueCents: int("estimated_value_cents").default(0),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const customerTrailersTable = sqliteTable("customer_trailers", {
  id: text("id").primaryKey(),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "cascade" }),
  licensePlateNumber: text("license_plate_number"),
  stateRegistered: text("state_registered"),
  expiration: text("expiration"),
  vinOrSerialNumber: text("vin_or_serial_number"),
  estimatedValueCents: int("estimated_value_cents").default(0),
  insuranceProviders: text("insurance_providers"),
  policyNumber: text("policy_number"),
  isTenantRegisteredOwner: int("is_tenant_registered_owner", { mode: "boolean" }).default(false),
  registeredOwnerName: text("registered_owner_name"),
  registeredOwnerAddress: text("registered_owner_address"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const customerVehiclesTable = sqliteTable("customer_vehicles", {
  id: text("id").primaryKey(),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "cascade" }),
  type: text("type"),
  makeModelYear: text("make_model_year"),
  bodyStyle: text("body_style"),
  vinNumber: text("vin_number"),
  licensePlateNumber: text("license_plate_number"),
  stateRegistered: text("state_registered"),
  titleNumber: text("title_number"),
  expiration: text("expiration"),
  estimatedValueCents: int("estimated_value_cents").default(0),
  insuranceProvider: text("insurance_provider"),
  policyNumber: text("policy_number"),
  isTenantRegisteredOwner: int("is_tenant_registered_owner", { mode: "boolean" }).default(false),
  registeredOwnerName: text("registered_owner_name"),
  registeredOwnerAddress: text("registered_owner_address"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
}); 