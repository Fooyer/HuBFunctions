import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { headers } from "next/headers";

let db = null;

export async function PUT(request) {
    const headerList = headers();
    const authorization = headerList.get("Authorization");
    
    try {
        await authorizated(authorization);
    } catch (e) {
        return new Response(JSON.stringify("User is not authorized!"), {
            headers: { "Content-Type": "application/json" },
            status: 401,
        });
    }

    const data = await request.json();
    const { id, id_language, code, title } = data;
    
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

    const selectFunction = `SELECT * FROM Functions WHERE id = ${id};`;
    
    const result1 = await db.all(selectFunction);

    if (result1[0] == null) {
        return new Response(JSON.stringify("Id not exist"), {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }
    
    const sql = `UPDATE Functions SET id_language = ${id_language}, code = "${code}", title = "${title}" WHERE id = ${id}`;

    const result = await db.all(sql);
    
    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}