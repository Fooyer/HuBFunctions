import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function PUT(request) {
    const data = await request.json();
    const { id, name } = data;
    
    if (!id) {
        return new Response(JSON.stringify("code is undefined"), {
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

    const selectLanguage = `SELECT * FROM Languages WHERE id = ${id};`;
    
    const result1 = await db.all(selectLanguage);

    if (result1[0] == null) {
        return new Response(JSON.stringify("Id not exist"), {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }
    
    const sql = `UPDATE Languages SET name = ${name} WHERE id = ${id}`;

    const result = await db.all(sql);
    
    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}