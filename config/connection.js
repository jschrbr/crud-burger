const mysql = require("mysql");
const util = require("util");
const myRegex = /[\w]+:..([\w]+):([\w]+)@([\w.-]+):[\w]+\/([\w]+)/i;

const [_, usr, pass, hst, db] = myRegex.exec(process.env.JAWSDB_URL);

console.log(usr, pass, hst, db);

const connection = mysql.createConnection({
  host: hst,
  user: usr,
  password: pass,
  database: db,
  ssl: "Amazon RDS",
});

connection.connect(function (err) {
  if (err) throw err;
});

const query = util.promisify(connection.query).bind(connection);

module.exports = query;
