var query = require("../config/connection.js");

async function selectAll(table) {
  const qry = `SELECT * FROM ${table}`;
  return { burgers: await query(qry) };
}

async function insert(table, set) {
  const qry = `INSERT INTO ${table} SET ?`;
  return await query(qry, set);
}
async function update(table, set, id) {
  const qry = `UPDATE ${table} SET ? WHERE id=${id}`;
  return await query(qry, set);
}

const orm = {
  all: async (table) => await selectAll(table),
  create: async (table, set) => await insert(table, set),
  update: async (table, set, id) => await update(table, set, id),
};

module.exports = orm;
