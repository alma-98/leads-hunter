import Database from "better-sqlite3";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename=fileURLToPath(import.meta.url);

const __dirname=path.dirname(__filename);

const db=new Database(
path.join(__dirname,"leads.db")
);

db.pragma("journal_mode=WAL");

db.exec(`

CREATE TABLE IF NOT EXISTS leads(

id INTEGER PRIMARY KEY AUTOINCREMENT,

business TEXT,

category TEXT,

email TEXT,

phone TEXT,

website TEXT,

address TEXT,

city TEXT,

province TEXT,

rating REAL,

reviews INTEGER,

created_at DATETIME DEFAULT CURRENT_TIMESTAMP

)

`);

console.log("SQLite Ready");

export default db;
