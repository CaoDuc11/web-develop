const express = require("express");
const {
  CreateEmployee,
  GetEmployees,
  DeleteEmployee,
  UpdateEmpolyee,
} = require("../controller/admin_collection/AdminCollectionController");
const checkInput = require("../middleware/Validator");
const {
  authenticationUser,
  checkAdminCollection,
} = require("../middleware/AuthUser");

const AdminCollectionRouter = express.Router();

AdminCollectionRouter.post(
  "/admin/collection/create",
  authenticationUser,
  checkAdminCollection,
  checkInput.checkRegisterEmployee,
  CreateEmployee
);

AdminCollectionRouter.get(
  "/admin/collection/employees",
  authenticationUser,
  checkAdminCollection,
  GetEmployees
);

AdminCollectionRouter.delete(
  "/admin/collection/delete/:id",
  authenticationUser,
  checkAdminCollection,
  DeleteEmployee
);

AdminCollectionRouter.put(
  "/admin/collection/employees/:id",
  authenticationUser,
  checkAdminCollection,
  UpdateEmpolyee
);

module.exports = AdminCollectionRouter;
