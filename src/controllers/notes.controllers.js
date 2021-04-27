const NoteModel = require("../models/NoteModel");
const notesController = {};

notesController.getNotes = async (req, res) => {
  await NoteModel.find({ user: req.user.id })
    .sort({ date: "desc" })
    .then((Notes) => {
      const noteContent = {
        notes: Notes.map((note) => {
          return {
            title: note.title,
            description: note.description,
            _id: note._id,
          };
        }),
      };
      res.render("notes/all-notes", {
        notes: noteContent.notes,
      });
    });
};
notesController.renderNewNote = (req, res) => {
  res.render("notes/new-note");
};
notesController.postNewNote = async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({
      text: "Please write a Title",
    });
  }
  if (!description) {
    errors.push({
      text: "Please write a Description",
    });
  }
  if (errors.length > 0) {
    res.render("notes/new-note", {
      errors,
      title,
      description,
    });
  } else {
    const NewNote = new NoteModel({
      title,
      description,
    });
    NewNote.user = req.user.id;
    await NewNote.save();
    req.flash("success_msg", "Note added Successfull");
    res.redirect("/notes");
  }
};
notesController.getNote = async (req, res) => {
  const note = await NoteModel.findById(req.params.id);
  const itemsNote = {
    title: note.title,
    description: note.description,
    _id: note._id,
  };
  res.render("notes/edit-note", { itemsNote });
};
notesController.updateNote = async (req, res) => {
  const { title, description } = req.body;
  await NoteModel.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Note Updated Successfull");
  res.redirect("/notes");
};
notesController.deleteNote = async (req, res) => {
  await NoteModel.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Note Deleted Successfull");
  res.redirect("/notes");
};

module.exports = notesController;
