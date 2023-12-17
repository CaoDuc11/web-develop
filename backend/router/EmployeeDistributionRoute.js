const express = require("express");
const {
  authenticationUser,
  checkEmployeeDistribution,
} = require("../middleware/AuthUser");
const checkInput = require("../middleware/Validator");
const {
  CreateDelivery,
  GetDelivery,
} = require("../controller/employee_distribution/EmployeeDistributionController");

const EmployeeDistributionRouter = express.Router();
EmployeeDistributionRouter.post(
  "/distribution/create/",
  authenticationUser,
  checkEmployeeDistribution,
  checkInput.checkFormDelivery,
  CreateDelivery
);

EmployeeDistributionRouter.get(
  "/distribution/deliveries/",
  authenticationUser,
  checkEmployeeDistribution,
  GetDelivery
);

module.exports = EmployeeDistributionRouter;
