const route = require("express").Router();
const { isAuthenticated } = require("../helpers/auth");
const {
  getNotes,
  renderNewNote,
  postNewNote,
  getNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controllers");

route.get("/notes/add", isAuthenticated, renderNewNote);

route.post("/notes/new-note", isAuthenticated, postNewNote);

route.get("/notes", isAuthenticated, getNotes);

route.get("/notes/edit/:id", isAuthenticated, getNote);

route.put("/notes/edit-note/:id", isAuthenticated, updateNote);

route.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = route;
