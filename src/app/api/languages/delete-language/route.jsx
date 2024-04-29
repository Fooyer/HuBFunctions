import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function DELETE(request) {
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
    const { id } = data;
    
    if (!id) {
        return new Response(JSON.stringify("Id is undefined"), {
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
    
    const deleteLanguage = `DELETE FROM Languages WHERE id = ${id};`;

    const result2 = await db.all(deleteLanguage);
    
    return new Response(JSON.stringify(result2), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}