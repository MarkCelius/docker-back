"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _promise = require("mysql2/promise");
var _dotenv = require("dotenv");
(0, _dotenv.config)();

/**
 * Conexión a la base de datos MySQL utilizando un pool de conexiones.
 * 
 * @type {Object}
 * 
 */
var conexion = (0, _promise.createPool)({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  port: process.env.MYSQL_ADDON_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
var _default = exports["default"] = conexion;