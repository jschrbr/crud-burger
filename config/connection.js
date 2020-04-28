// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("burgerDB", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// const Burgers = sequelize.define(
//   "burger",
//   {
//     burger_name: {
//       type: Sequelize.STRING(20),
//       allowNull: false,
//     },
//     devoured: {
//       type: Sequelize.BOOLEAN,
//       default: false,
//     },
//   },
//   { timestamps: false }
// );

// module.exports = Burgers;

const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgerDB",
});

connection.connect(function (err) {
  if (err) throw err;
});

const query = util.promisify(connection.query).bind(connection);

module.exports = query;
