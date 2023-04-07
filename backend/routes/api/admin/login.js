const express = require("express");
const passport = require("passport");
const { ensureLoggedOut } = require("connect-ensure-login");

const router = express.Router();

router.use(ensureLoggedOut("/api/admin/dashboard"));

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/api/admin/dashboard");
  } else {
    res.render("adminLogin");
  }
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/api/admin/dashboard",
    failureRedirect: "/api/admin/login",
  })
);

module.exports = router;
