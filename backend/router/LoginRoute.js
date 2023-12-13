const express = require("express");
const checkLogin = require("../middleware/Validator");
const Login = require("../controller/authentication/AuthController");

const loginRoute = express.Router();
loginRoute.post("/login", checkLogin, Login);
module.exports = loginRoute;
