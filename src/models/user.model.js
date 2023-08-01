const { mongoose, Schema, model } = require("mongoose");

const USER = new Schema({
  name: { type: String },
  address: { type: String },
});

const userModel = new model("users", USER);
module.exports = userModel;
