const mysql = require("mysql2/promise");
require("dotenv").config();

let db;
try {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "interior_designing_website"
  });

  db = new Proxy(pool, {
    get(target, prop) {
      if (typeof target[prop] === "function") {
        return async (...args) => {
          try {
            return await target[prop](...args);
          } catch (err) {
            console.warn("[AI Studio] MySQL operation failed, using mock fallback:", err.message);
            return [[]];
          }
        };
      }
      return target[prop];
    }
  });
} catch {
  console.warn("[AI Studio] MySQL pool creation failed — mock active");
  db = {
    query: async () => [[]],
    execute: async () => [[]],
    getConnection: async () => ({
      query: async () => [[]],
      execute: async () => [[]],
      release: () => {}
    })
  };
}

module.exports = db;