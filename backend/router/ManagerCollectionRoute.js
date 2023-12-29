const express = require("express");
const {
  GetAdminUser,
  GetSystemList,
} = require("../controller/manager_system/ManagerSystemController");
const checkInput = require("../middleware/Validator");
const {
  authenticationUser,
  checkManagerSystem,
} = require("../middleware/AuthUser");

const ManagerSystemRouter = express.Router();
ManagerSystemRouter.get(
  "/management/adminuser/",
  authenticationUser,
  checkManagerSystem,
  GetAdminUser
);

ManagerSystemRouter.get(
  "/management/system",
  authenticationUser,
  checkManagerSystem,
  GetSystemList
);

module.exports = ManagerSystemRouter;
