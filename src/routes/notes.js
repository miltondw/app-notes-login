const route = require("express").Router();

route.get("/notes", (req, res) => {
  res.send("Notes from database");
});

module.exports = route;
