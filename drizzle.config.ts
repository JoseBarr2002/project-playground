import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "turso",
  schema: "src/db/schemas",
  out: "src/drizzle",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
});
