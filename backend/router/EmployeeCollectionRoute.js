const express = require("express");
const {
  authenticationUser,
  checkEmployeeCollection,
} = require("../middleware/AuthUser");
const {
  GetDeliveryData,
  UpdateJourney,
} = require("../controller/employee_collection/EmployeeCollectionController");

const EmployeeCollectionRouter = express.Router();
EmployeeCollectionRouter.get(
  "/collection/deliveries/:status",
  authenticationUser,
  checkEmployeeCollection,
  GetDeliveryData
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
