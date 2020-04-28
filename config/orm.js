// var Burgers = require("../config/connection.js");

// async function getIndexes() {
//   let burgers = await Burgers.findAll();
//   burgers = burgers.map((burger) => burger.dataValues);
//   return { burgers: burgers };
// }

// const orm = {
//   all: async () => await getIndexes(),
//   create: async (burger) => await Burgers.create({ burger_name: burger }),
//   update: async (id) =>
//     await Burgers.update({ devoured: true }, { where: { id: id } }),
// };

// module.exports = orm;

var query = require("../config/connection.js");

async function selectAll(table) {
  const qry = `SELECT * FROM ${table}`;
  return { burgers: await query(qry) };
}

async function insert(table, burger) {
  const qry = `INSERT INTO ${table} SET ?`;
  return await query(qry, [{ burger_name: burger }]);
}
async function update(table, id) {
  const qry = `UPDATE ${table} SET ? WHERE id=${id}`;
  return await query(qry, [{ devoured: true }]);
}

const orm = {
  all: async (table) => await selectAll(table),
  create: async (table, burger) => await insert(table, burger),
  update: async (table, id) => await update(table, id),
};

module.exports = orm;
