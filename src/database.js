const mongoose = require("mongoose");
const URI = process.env.MONGOODB_URI
mongoose
  .connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology:true
  })
  .then((db) => console.log("Dabase is connected"))
  .catch((err) => console.error(err));
