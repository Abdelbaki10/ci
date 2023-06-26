const express = require("express");
const mongoose = require("mongoose");
const db_url = "mongodb://localhost:27017/bakiDB";

const { login } = require("./controllers/login.controller");

const app = express();
mongoose.connect(db_url).then(() => console.log("connected with success"));
app.get("/", login);

app.listen(4000, () => {
  console.log("app is runing on port 4000");
});
