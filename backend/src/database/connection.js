const mysql = require("mysql2");

const connection = mysql.createConnection({
  user: "root",
  password: "Locuras438",
  database: "sch_cirugiaSegura",
  port: 3306,
  logging: true,
  //entities: [],
  //synchronize: true,
});

module.exports = connection;
