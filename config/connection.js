const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function (err) {
  if (err) throw err;
});

const query = util.promisify(connection.query).bind(connection);

module.exports = query;
