const express = require("express");
const passport = require("passport");
const Admin = require("../../../models/admin");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("adminRegister");
});

router.post(
  "/",
  (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body);
    Admin.addAdmin(email, password)
      .then(() => {
        next();
      })
      .catch((err) => {
        res.redirect("/api/admin/register");
        next(err);
      });
  },
  passport.authenticate("local", {
    successRedirect: "/api/admin/dashboard",
    failureRedirect: "/api/admin/login",
  })
);

module.exports = router;
