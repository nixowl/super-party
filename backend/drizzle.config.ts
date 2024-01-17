import type { Config } from "drizzle-kit"
import "dotenv/config"

// TODO - env types
export default {
  schema: "./src/utils/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  out: "./migrations",
} satisfies Config
