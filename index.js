const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.use(require("./routes/branch.route"));
app.use(require("./routes/task.route"));
app.use(require("./routes/user.route"));

mongoose.connect(process.env.SERVER, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("monoose connected");

  app.listen(process.env.PORT, () => {
    console.log(`connected on ${process.env.PORT}`);
  });
});
