import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

const queryClient = postgres("postgres://postgres:postgres@localhost:5432/postgres")
export const db = drizzle(queryClient)