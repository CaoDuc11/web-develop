const express = require("express");
const CreateEmployee = require("../controller/admin_distribution/AdminDistributionController");
const checkInput = require("../middleware/Validator");
const {
  authenticationUser,
  checkAdminDistribution,
} = require("../middleware/AuthUser");

const AdminDistributionRouter = express.Router();

AdminDistributionRouter.post(
  "/admin/distribution/create",
  authenticationUser,
  checkAdminDistribution,
  checkInput.checkRegisterEmployee,
  CreateEmployee
);

module.exports = AdminDistributionRouter;
