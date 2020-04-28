var orm = require("../config/orm.js");

var burger = {
  all: async (table) => await orm.all(table),
  create: async (table, burger) => await orm.create(table, burger),
  update: async (table, id) => await orm.update(table, id),
};

module.exports = burger;
