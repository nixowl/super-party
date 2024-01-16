import type { Config } from "drizzle-kit";

export default {
    schema: "./src/utils/schema.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: "postgres://postgres:postgres@localhost:5432/postgres"
    },
    out: "./migrations",
} satisfies Config;