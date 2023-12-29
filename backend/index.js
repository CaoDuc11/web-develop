const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const loginRoute = require("./router/LoginRoute");
const AdminDistributionRouter = require("./router/AdminDistributionRoute");
const EmployeeDistributionRouter = require("./router/EmployeeDistributionRoute");
const AdminCollectionRouter = require("./router/AdminCollectionRoute");
const JourneyRouter = require("./router/JourneyRoute");
const {
  EmployeeCollectionRouter,
} = require("./router/EmployeeCollectionRoute");
const ManagerSystemRouter = require("./router/ManagerCollectionRoute");
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loginRoute);
app.use(AdminDistributionRouter);
app.use(EmployeeDistributionRouter);
app.use(AdminCollectionRouter);
app.use(EmployeeCollectionRouter);
app.use(JourneyRouter);
app.use(ManagerSystemRouter);
app.listen(5000);
