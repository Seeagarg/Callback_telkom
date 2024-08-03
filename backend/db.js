const mysql = require('mysql2')
require('dotenv').config()


const pool= mysql.createPool({
    port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  user: process.env.DB_USER,
  waitForConnections: true,
  // connectionLimit: 10, 
})

pool.getConnection((err,connection) => {
    if (err) {
      console.error('Error connecting to first database:', err);
      return;
    }
    if (connection) connection.release();
  console.log("Connected to the first database");

  })


  const pool2=mysql.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB2,
  user: process.env.DB_USER,
  waitForConnections: true,
  //  connectionLimit: 10, 
  })

  pool2.getConnection((err,connection) => {
    if (err) {
      console.error('Error connecting second database:', err);
      return;
    }
    if (connection) connection.release();
  console.log("Connected to the second database");
});


  module.exports={pool,pool2}