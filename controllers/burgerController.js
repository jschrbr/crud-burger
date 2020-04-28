const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
const table = "burgers";

router.get("/", async (req, res) => {
  res.render("index", await burger.all(table));
});

router.post("/api/burgers", async (req, res) => {
  const new_burger = req.body.burger;
  const set = [{ burger_name: new_burger }];
  await burger.create(table, set);
  res.render("index", await burger.all(table));
});

router.route("/api/burgers/:id").put(async (req, res) => {
  const id = req.params.id;
  const set = [{ devoured: true }];
  await burger.update(table, set, id);
  res.render("index", await burger.all(table));
});

module.exports = router;
