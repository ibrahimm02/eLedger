require('dotenv').config();
const mysql = require('mysql');

// Database Connection for Production

// let config = {
//     user: process.env.SQL_USER,
//     database: process.env.SQL_DATABASE,
//     password: process.env.SQL_PASSWORD,
// }

// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
//   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
// }

// let connection = mysql.createConnection(config);

// Database Connection for Development

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER, 
//     password: process.env.DB_PASS, 
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
//     multipleStatements: true
// });

// Migrate to AWS RDS MySQL //

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  multipleStatements: true
});

pool.getConnection(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

module.exports = pool;