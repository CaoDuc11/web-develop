const express = require("express");
const checkInput = require("../middleware/Validator");
const Login = require("../controller/authentication/AuthController");

const loginRoute = express.Router();
loginRoute.post("/login", checkInput.checkLogin, Login);
module.exports = loginRoute;
