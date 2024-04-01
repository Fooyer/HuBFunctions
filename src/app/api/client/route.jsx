import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { createHmac, randomUUID } from "node:crypto";

let db = null;

export async function POST(request) {
    const data = await request.json();
    const { username, email, password } = data;

    if (!username) {
        return new Response(JSON.stringify("username is undefined"), {
            headers: { "Content-Type": "application/json" },
            status: 400,
        });
    }

    if (!email) {
        return new Response(JSON.stringify("email is undefined"), {
            headers: { "Content-Type": "application/json" },
            status: 400,
        });
    }

    if (!password) {
        return new Response(JSON.stringify("password is undefined"), {
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
    const id = randomUUID();

    const secret = process.env.SECRET_PASSKEY;

    const password_hash = createHmac('sha256', secret)
               .update(password)
               .digest('hex');

    const sql = `INSERT INTO Clients ("id", "username", "email", "senha") VALUES ("${id}", "${username}", "${email}", "${password_hash}");`

    const items = await db.all(sql);

    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}