require("dotenv").config('./.env');

// PG database client/connection setup
const { Pool } = require("pg");

let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    max:3,
    idleTimeoutMillis: 3000, // close idle clients after 1 second
    connectionTimeoutMillis: 10000,
  };
}

const db = new Pool(dbParams);
db.connect(() => {
  console.log('connected to database');
});

module.exports = db;