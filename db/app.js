const mysql = require("mysql");

// configuration
// 192.168.64.2
const conn = mysql.createConnection({
  host: "itgid.mysql.tools", //127.0.0.1
  user: "itgid_nodetest",
  database: "itgid_nodecourse",
  password: "A16gAi50YiB0",
});

conn.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});
