const express = require("express");
const { ensureLoggedOut } = require("connect-ensure-login");

const router = new express.Router();

router.get(
  "/",
  ensureLoggedOut("/api/client/dashboard"),
  ensureLoggedOut("/api/coach/dashboard"),
  ensureLoggedOut("/api/admin/dashboard"),
  (req, res) => {
    res.render("home");
  }
);

module.exports = router;
