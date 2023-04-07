const express = require("express");
const passport = require("passport");
const { ensureLoggedOut } = require("connect-ensure-login");

const router = express.Router();

router.use(ensureLoggedOut("/api/client/dashboard"));

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/api/client/dashboard");
  } else {
    res.render("login");
  }
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/api/client/dashboard",
    failureRedirect: "/api/client/login",
  })
);

module.exports = router;
