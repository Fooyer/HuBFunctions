import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(request) {
    const body = request[Object.getOwnPropertySymbols(request)[1]];
    const paramValue = body.url.searchParams.get("functionString");

    if (!db) {
        db = await open({
            filename: "./collection.db",
            driver: sqlite3.Database,
        });
    }

    const sql = `SELECT * FROM Functions WHERE code LIKE '%${paramValue}%' OR title LIKE '%${paramValue}%';`;
    
    const items = await db.all(sql);

    if (items[0] == null) {
        return new Response(JSON.stringify("Data not found"), {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }
    
    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}