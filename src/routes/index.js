const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hi from index");
});
route.get("/about", (req, res) => {
  res.send("about");
});
module.exports = route;
