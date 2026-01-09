import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const db = new pg.Client({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

export async function databaseStart(){
    try {
        await db.connect();

        console.log(`Succesfully connected to the ${db.database} database`);
    } catch (error) {
        console.log(error);
    }
}


export default db;