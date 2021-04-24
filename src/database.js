const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/notesdb", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology:true
  })
  .then((db) => console.log("Dabase is connected"))
  .catch((err) => console.error(err));
