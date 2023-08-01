const userModel = require("../models/user.model");

const login = async (req, res) => {
  const enVariable_B = process.env.TEST_BAKI || "default value";
  const enVariable_T = process.env.TEST_TAKI || "default value";
  const enVariable_M = process.env.TEST_MOHAMED || "default value";
  const enVariable_Y = process.env.TEST_YASMINA || "default value";
  console.log(
    "tatatat",
    enVariable_B,
    enVariable_T,
    enVariable_M,
    enVariable_Y
  );
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
