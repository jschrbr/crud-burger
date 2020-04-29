const mysql = require("mysql");
const util = require("util");
const myRegex = /mysql:\/\/([\w\d]+):([\w\d]+)@([\w\d.-]+):([\w\d]+)\/([\w\d]+)/i;
const [url, user, pass, host, port, db] = myRegex.exec(process.env.JAWSDB_URL);

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: pass,
  databse: db,
  port: port,
  ssl: "Amazon RDS",
});

connection.connect(function (err) {
  if (err) throw err;
});

const query = util.promisify(connection.query).bind(connection);

module.exports = query;
