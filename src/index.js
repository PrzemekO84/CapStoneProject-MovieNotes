import app from "./app.js"
import { databaseStart } from "../db/db.js"
import dotenv from "dotenv"
dotenv.config();


const PORT = process.env.APP_PORT || 3000;

try {
    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

    databaseStart();
});
} catch (error) {
    console.log(error);
}