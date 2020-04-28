const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const routes = require("./controllers/burgerController.js");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
