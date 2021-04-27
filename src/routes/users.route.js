const route = require("express").Router();
const {
  renderSignin,
  autenticate,
  renderSignup,
  newUser,
  logout,
} = require("../controllers/user.controllers");

route.get("/users/signin", renderSignin);
route.post("/users/signin", autenticate);
route.get("/users/signup", renderSignup);
route.post("/users/signup", newUser);
route.get("/users/logout", logout);

module.exports = route;
