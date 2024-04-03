import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET() {    
    if (!db) {
        db = await open({
            filename: "./collection.db",
            driver: sqlite3.Database,
        });
    }
    
    const sql = `SELECT * FROM Functions;`;

    const items = await db.all(sql);

    if (items[0] == null) {
        return new Response("Data not found", {
            headers: { "Content-Type": "application/json" },
            status: 400,
        });
    }

    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}