const { login } = require("../src/controllers/login.controller");
const userModel = require("../src/models/user.model");
jest.mock("../src/models/user.model");
const request = {};
const response = {
  status: jest.fn((x) => x),
  send: jest.fn((x) => x),
};
describe(`Test create user endPoint`, () => {
  test("it should return 201 status with the newly created user as response", async () => {
    await userModel.create.mockResolvedValueOnce({
      name: "userOne",
      address: "addressOne",
    });
    await login(request, response);
    expect(response.status).toHaveBeenCalledWith(201);
    expect(response.send).toHaveBeenCalledTimes(1);
  });

  test("it should return 500 status with error while creating user as response", async () => {
    await userModel.create.mockResolvedValueOnce(null);
    await login(request, response);
    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.send).toHaveBeenCalledWith("error while saving new user");
    expect(response.send).toHaveBeenCalledTimes(2);
  });
});
