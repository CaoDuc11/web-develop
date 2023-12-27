const express = require("express");
const checkInput = require("../middleware/Validator");
const {
  Login,
  logOut,
} = require("../controller/authentication/AuthController");

const loginRoute = express.Router();
loginRoute.post("/login", checkInput.checkLogin, Login);
loginRoute.delete("/logout", logOut);
module.exports = loginRoute;
