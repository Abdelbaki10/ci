const userModel = require("./models/user.model");

const login = async (req, res) => {
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
