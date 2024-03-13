"use server";

import mysql from "mysql2/promise";
import process from "process";

export async function authenticate(_currentState: unknown, formData: FormData) {
    const conn = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_TABLE,
    });
    
    try {
        const [results, fields] = await conn.query("SELECT * FROM USERS");
        console.log(results, fields);
    } catch (error) {
        console.error(error)
    }
}
