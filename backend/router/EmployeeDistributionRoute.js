const express = require("express");
const {
  authenticationUser,
  checkEmployeeDistribution,
} = require("../middleware/AuthUser");
const checkInput = require("../middleware/Validator");
const {
  CreateDelivery,
  GetDelivery,
  DeleteDelivery,
} = require("../controller/employee_distribution/EmployeeDistributionController");

const EmployeeDistributionRouter = express.Router();
EmployeeDistributionRouter.post(
  "/distribution/deliveries/create/",
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

EmployeeDistributionRouter.delete(
  "/distribution/deliveries/delete/:id",
  authenticationUser,
  checkEmployeeDistribution,
  DeleteDelivery
);

module.exports = EmployeeDistributionRouter;
