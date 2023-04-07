const express = require("express");

// home route
const homeRoute = require("./home");

// Client Routes
const clientLogin = require("./client/login");
const clientRegister = require("./client/register");
const clientUpdatePassword = require("./client/updatePassword");
const clientDashboard = require("./client/dashboard");
const clientLogout = require("./client/logout");

// Admin Routes
const adminLogin = require("./admin/login");
const adminDashboard = require("./admin/dashboard");
const adminLogout = require("./admin/logout");
const adminRegister = require("./admin/register");

// Coach Routes
const coachLogin = require("./coach/login");
const coachDashboard = require("./coach/dashboard");
const coachLogout = require("./coach/logout");

const router = new express.Router();

router.use("/", homeRoute);

router.use("/client/login", clientLogin);
router.use("/client/register", clientRegister);
router.use("/client/updatePassword", clientUpdatePassword);
router.use("/client/dashboard", clientDashboard);
router.use("/client/logout", clientLogout);

router.use("/admin/login", adminLogin);
router.use("/admin/dashboard", adminDashboard);
router.use("/admin/logout", adminLogout);
router.use("/admin/register", adminRegister);

router.use("/coach/login", coachLogin);
router.use("/coach/dashboard", coachDashboard);
router.use("/coach/logout", coachLogout);

module.exports = router;
