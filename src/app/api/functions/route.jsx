import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function POST(request) {
    const data = await request.json();
    const { id_language, name } = data;

    if (!db) {
        db = await open({
            filename: "./collection.db",
            driver: sqlite3.Database,
        });
    }

    const sql = `INSERT INTO Functions ("id_language", "name") VALUES ("${id_language}", "${name}");`

    const items = await db.all(sql);

    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}