const { login } = require("../controllers/login.controller");
const userModel = require("../models/user.model");
jest.mock("../models/user.model");
const request = {};
const response = {
  status: jest.fn((x) => x),
  send: jest.fn((x) => x),
};
describe(`Test create user endPoint`, () => {
  test("it should return 201 status with the newly created user as response", async () => {
    await userModel.create.mockResolvedValue({
      name: "userOne",
      address: "addressOne",
    });
    await login(request, response);
    expect(response.status).toHaveBeenCalledWith(201);
    expect(response.send).toHaveBeenCalledTimes(1);
  });
});
