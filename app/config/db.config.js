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
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || '1234',
    database: process.env.MYSQLDB || 'basedatos_fl',
    port: process.env.MYSQLPORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default conexion;