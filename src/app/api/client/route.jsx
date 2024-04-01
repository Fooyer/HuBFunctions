import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { createHmac } from "node:crypto";

let db = null;

export async function POST(request) {
    const data = await request.json();
    const { username, email, password } = data;

    if (!username) {
        return new Response(JSON.stringify("Username is null"), {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });
    }

    if (!email) {
        return new Response(JSON.stringify("Email is null"), {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });
    }

    if (!password) {
        return new Response(JSON.stringify("Password is null"), {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });
    }

    if (!db) {
        db = await open({
            filename: "./collection.db",
            driver: sqlite3.Database,
        });
    }

    const secret = process.env.SECRET_PASSKEY;

    const password_hash = createHmac('sha256', secret)
               .update(password)
               .digest('hex');

    const sql = `INSERT INTO Clients ("username", "email", "senha") VALUES ("${username}", "${email}", "${password_hash}");`

    const items = await db.all(sql);

    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}