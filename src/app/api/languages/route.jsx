import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function POST(request) {
    const data = await request.json();
    const { name } = data

    if (!name) {
        return new Response(JSON.stringify("name is undefined"), {
            headers: { "Content-Type": "application/json" },
            status: 400,
        });
    }

    if (!db) {
        db = await open({
            filename: "./collection.db",
            driver: sqlite3.Database,
        });
    }

    const sql = `INSERT INTO Languages ("name") VALUES ("${name}");`

    const items = await db.all(sql);

    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}