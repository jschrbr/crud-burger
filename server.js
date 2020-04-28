const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// var routes = require("./controllers/burgerController.js");
// app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
