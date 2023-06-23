import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Mengatur koneksi ke MySQL local
// const db = new Sequelize('upload_db', 'root', '', {
//     host: 'localhost',
//     dialect: "mysql",
//     password: process.env.DB_PASSWORD,
// });

// Mengatur koneksi ke CockroachDB
const db = new Sequelize(process.env.DATABASE_URL)

export default db;