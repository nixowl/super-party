CREATE TABLE IF NOT EXISTS "tokens" (
	"hash" varchar(255) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"expiry" timestamp DEFAULT now() NOT NULL,
	"scope" varchar(255) NOT NULL
);
