import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { createHmac } from "node:crypto";

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
    const { email, password } = data;
    
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
    
    const secret = process.env.SECRET_PASSKEY;

    const password_hash = createHmac('sha256', secret)
               .update(password)
               .digest('hex');

    const sql = `SELECT * FROM Clients WHERE email = "${email}" AND password = "${password_hash}"`;
    
    const items = await db.all(sql);

    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}