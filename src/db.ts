import pgPromise from "pg-promise";
const pgp = pgPromise();

const db = pgp({
  host: process.env.DB_HOST || "localhost",
  port: +process.env.DB_PORT! || 5432,
  database: process.env.DB_NBAME || "birthday_reminder_db",
  user: process.env.DB_USER || "diego_mbp",
  password: process.env.DB_PASSWORD || "#M0vingoutdallas23",
});

export default db;
