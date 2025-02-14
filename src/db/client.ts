import { drizzle } from "drizzle-orm/libsql/web";
import { createClient } from "@libsql/client/web";

const tursoClient = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Register all tables in the schema
export const db = drizzle(tursoClient);
