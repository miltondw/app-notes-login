const route = require("express").Router();

route.get("/", (req, res) => {
  res.render('index')
});
route.get("/about", (req, res) => {
  res.render("about");
});

module.exports = route;
