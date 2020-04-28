const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
const table = "burgers";

router.get("/", async (req, res) => {
  res.render("index", await burger.all(table));
});

router.post("/api/burgers", async (req, res) => {
  const new_burger = req.body.burger;
  await burger.create(new_burger);
  res.render("index", await burger.all(table));
});

router.route("/api/burgers/:id").put(async (req, res) => {
  let id = req.params.id;
  await burger.update(id);
  res.render("index", await burger.all(table));
});

module.exports = router;
