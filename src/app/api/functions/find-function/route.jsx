import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const functionV = searchParams.get('functionString');

    if (!db) {
        db = await open({
            filename: "./collection.db",
            driver: sqlite3.Database,
        });
    }

    const findFunctions = `SELECT * FROM Functions WHERE code LIKE '%${functionV}%' OR title LIKE '%${functionV}%';`;
    
    const functions = await db.all(findFunctions);

    if (functions[0] == null) {
        return new Response(JSON.stringify("Data not found"), {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }

    const result = await addLanguageFunction(functions);
    
    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}

async function addLanguageFunction(functions) {
    await Promise.all(functions.map(async (element, index) => {
        const findLanguage = `SELECT name FROM Languages WHERE id = ${element.id_language};`;
        
        const language = await db.all(findLanguage);

        functions[index].language = language[0].name;
    }));
    
    return functions;
}