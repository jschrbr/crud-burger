var orm = require("../config/orm.js");

var burger = {
  all: async (table) => await orm.all(table),
  create: async (table, set) => await orm.create(table, set),
  update: async (table, set, id) => await orm.update(table, set, id),
};

module.exports = burger;
