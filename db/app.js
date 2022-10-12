const mysql = require("mysql");

// configuration
// 192.168.64.2
const conn = mysql.createConnection({
  host: "localhost",
  port: "8443",
  user: "root",
  database: "itgid_nodecourse",
  password: "",
  // host: "itgid.mysql.tools", //127.0.0.1
  // user: "root",
  // database: "itgid_node",
  // password: " ",
});

conn.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

// let query = "SELECT * FROM user";

// conn.query(query, (err, result, field) => {
//   console.log(err);
//   console.log(result);
//   // console.log(field);
// });

conn.end((err) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("Database ----- Close");
  }
});

// my sql

// CREATE TABLE user (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// firstname VARCHAR(30) NOT NULL,
// lastname VARCHAR(30) NOT NULL,
// email VARCHAR(50),
// reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// )
