const userModel = require("../models/user.model");
const dotenv = require("dotenv");
dotenv.config();

const login = async (req, res) => {
  const enVariable = process.env.TEST_BAKI;
  console.log("tatatat", enVariable);
  const user = await userModel.create({
    name: "abdelbaki",
    address: "sidi amar",
  });
  if (user) {
    res.status(201);
    return res.send(user);
  }
  res.status(500);
  return res.send("error while saving new user");
};

module.exports = { login };
