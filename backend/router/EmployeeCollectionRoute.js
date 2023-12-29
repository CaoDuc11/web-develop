const express = require("express");
const {
  authenticationUser,
  checkEmployeeCollection,
} = require("../middleware/AuthUser");
const {
  GetDeliveryData,
  UpdateJourney,
  GetDeliveryFromCollecton,
} = require("../controller/employee_collection/EmployeeCollectionController");

const EmployeeCollectionRouter = express.Router();
EmployeeCollectionRouter.get(
  "/collection/deliveries",
  authenticationUser,
  checkEmployeeCollection,
  GetDeliveryData
);

EmployeeCollectionRouter.get(
  "/collection/received",
  authenticationUser,
  checkEmployeeCollection,
  GetDeliveryFromCollecton
);

EmployeeCollectionRouter.put(
  "/collection/deliveries/update/:id",
  authenticationUser,
  checkEmployeeCollection,
  UpdateJourney
);

module.exports = {
  EmployeeCollectionRouter,
};
