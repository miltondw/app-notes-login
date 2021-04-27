const route = require("express").Router();
const {
  renderIndex,
  renderAbout,
} = require("../controllers/index.controllers");

route.get("/", renderIndex);

module.exports = route;
