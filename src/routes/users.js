const route = require("express").Router();

route.get("/users/signin", (req, res) => {
  res.send("Please Signin");
});

route.get("/users/signup", (req, res) => {
  res.send("Hir well be authentication form");
});

module.exports = route;
