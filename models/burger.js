var orm = require("../config/orm.js");

var burger = {
  all: async (table) => await orm.all(table),
  create: async (burger) => await orm.create(burger),
  update: async (id) => await orm.update(id),
};

module.exports = burger;
