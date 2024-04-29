import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const id_language = searchParams.get('id_language');
    
    if (!db) {
        db = await open({
            filename: "./collection.db",
            driver: sqlite3.Database,
        });
    }

    const sql = `SELECT name FROM Languages WHERE id = ${id_language};`;

    const language = await db.all(sql);

    if (language[0] == null) {
        return new Response(JSON.stringify("Data not found"), {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }
    
    return new Response(JSON.stringify(language[0]), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}