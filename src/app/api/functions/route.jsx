import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;

export async function POST(request) {
    const data = await request.json();
    const { nome, email, senha } = data;

    if (!db) {
        db = await open({
            filename: "./collection.db",
            driver: sqlite3.Database,
        });
    }

    const sql = `INSERT INTO Client (username, email, senha) VALUES (${nome}, ${email}, ${senha});`

    const items = await db.all(sql);

    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}