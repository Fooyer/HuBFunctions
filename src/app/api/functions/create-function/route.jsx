import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { headers } from "next/headers";

let db = null;

export async function POST(request) {
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
    const { id_language, code, title } = data;
    
    if (!code) {
        return new Response(JSON.stringify("code is undefined"), {
            headers: { "Content-Type": "application/json" },
            status: 400,
        });
    }

    if (!id_language) {
        return new Response(JSON.stringify("id_language is undefined"), {
            headers: { "Content-Type": "application/json" },
            status: 400,
        });
    }

    if (!title) {
        return new Response(JSON.stringify("title is undefined"), {
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
    
    const searchIdFunctions = `SELECT id FROM Functions WHERE id=(SELECT max(id) FROM Functions);`;

    let idResult = await db.all(searchIdFunctions);
    let id;

    if (idResult[0] == null) {
        id = 1;
    } else {
        id = Number(idResult[0].id);
        id++;
    }
    
    const sql = `INSERT INTO Functions ("id", "id_language", "code", "title") VALUES ("${id}", "${id_language}", "${code}", "${title}");`;
    
    const items = await db.all(sql);

    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}