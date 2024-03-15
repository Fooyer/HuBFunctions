import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;

export async function POST(request) {
    const data = await request.json();
    const { id, id_client, name } = data;

    if (!db) {
        db = await open({
            filename: "./collection.db",
            driver: sqlite3.Database,
        });
    }

    const sql = `INSERT INTO Languages ("id", "id_client", "name") VALUES ("${id}", "${id_client}", "${name}");`

    const items = await db.all(sql);

    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}