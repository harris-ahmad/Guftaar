const express = require("express");
const passport = require("passport");
const { ensureLoggedOut } = require("connect-ensure-login");

const router = express.Router();

router.use(ensureLoggedOut("/api/coach/dashboard"));

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("coachDashboard");
  } else {
    res.render("coachLogin");
  }
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/api/coach/dashboard",
    failureRedirect: "/api/coach/login",
  })
);

module.exports = router;
