const route = require("express").Router();

route.get("/users/signin", (req, res) => {
  res.render('users/signin');
});

route.get("/users/signup", (req, res) => {
  res.render("users/signup");
});

module.exports = route;
