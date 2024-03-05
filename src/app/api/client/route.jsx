import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

// Define the GET request handler function
export async function POST(req, res) {
    const data = await request.json();
    const { nome, idade } = data;

    // Check if the database instance has been initialized
    if (!db) {
        // If the database instance is not initialized, open the database connection
        db = await open({
        filename: "./collection.db", // Specify the database file path
        driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
        });
    }

    // Perform a database query to retrieve all items from the "items" table
    const items = await db.all("SELECT * FROM items");

    // Return the items as a JSON response with status 200
    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}







// import { NextResponse } from "next/server";
// // import client from "../database";

// export async function POST(request) {
    

//     return NextResponse.json({ nome, idade })
    // Verifica se as credenciais são do mesmo domínio
    // if (request.credentials !== "same-origin") {
    //     return NextResponse.json({ message: "Não Autorizado!", success: 0 }, { status: 403 });
    // }

    // Obtém os dados do corpo da requisição
    // const data = await request.json();
    // const { id, nome, rua, numero, cidade, estado, cep } = data;

    // try {
    //     if (id) {
    //         // Atualiza a atividade existente
    //         // const result = await client.query("UPDATE pontos SET nome = $1, rua = $2, numero = $3, cidade = $4, estado = $5, cep = $6 WHERE id = $7", [nome, rua, numero, cidade, estado, cep, id]);

    //         // Verifica se alguma linha foi realmente atualizada
    //         if (result.rowCount === 0) {
    //             return NextResponse.json({ message: "Ponto não encontrado para atualização!", success: 0 }, { status: 404 });
    //         }

    //         return NextResponse.json({ message: "Ponto atualizado com sucesso!", success: 1 }, { status: 200 });
    //     } else {
    //         // Insere uma nova atividade
    //         // await client.query("INSERT INTO pontos (nome, rua, numero, cidade, estado, cep) VALUES ($1, $2, $3, $4, $5, $6)", [nome, rua, numero, cidade, estado, cep]);
    //         return NextResponse.json({ message: "Ponto adicionada com sucesso!", success: 1 }, { status: 201 });
    //     }
    // } catch (error) {
    //     // Trata possíveis erros
    //     console.error(error);
    //     return NextResponse.json({ message: "Erro ao processar a requisição.", success: 0 }, { status: 500 });
    // }
}