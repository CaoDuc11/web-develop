const express = require("express");
const {
  CreateEmployee,
  GetEmployees,
  DeleteEmployee,
  UpdateEmpolyee,
} = require("../controller/admin_distribution/AdminDistributionController");
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

AdminDistributionRouter.get(
  "/admin/distribution/employees",
  authenticationUser,
  checkAdminDistribution,
  GetEmployees
);

AdminDistributionRouter.delete(
  "/admin/distribution/delete/:id",
  authenticationUser,
  checkAdminDistribution,
  DeleteEmployee
);

AdminDistributionRouter.put(
  "/admin/distribution/employees/:id",
  authenticationUser,
  checkAdminDistribution,
  UpdateEmpolyee
);

module.exports = AdminDistributionRouter;
