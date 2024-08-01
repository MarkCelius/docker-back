import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

/**
 * Conexión a la base de datos MySQL utilizando un pool de conexiones.
 * 
 * @type {Object}
 * 
 */
const conexion = createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDB,
    port: process.env.MYSQLPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default conexion;