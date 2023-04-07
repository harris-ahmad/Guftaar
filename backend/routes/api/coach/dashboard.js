const express = require("express");
const { ensureLoggedIn } = require("connect-ensure-login");

const router = new express.Router();

router.use(ensureLoggedIn("/api/coach/login"));

router.get("/", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
