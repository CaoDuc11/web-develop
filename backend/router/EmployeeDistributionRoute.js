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
  UpdateDelivery,
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
  "/distribution/deliveries/:status",
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

EmployeeDistributionRouter.put(
  "/distribution/deliveries/update/:id",
  authenticationUser,
  checkEmployeeDistribution,
  UpdateDelivery
);

module.exports = EmployeeDistributionRouter;
