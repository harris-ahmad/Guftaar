const express = require("express");
const Coach = require("../../../models/coach");
const { ensureLoggedIn } = require("connect-ensure-login");

const router = express.Router();

router.use(ensureLoggedIn("/api/admin/login"));

router.get("/", async (req, res) => {
  res.render("adminDashboard");
});

router.get("/addCoach", (req, res) => {
  res.render("addCoach");
});

router.post("/addCoach", async (req, res, next) => {
  const { name, email, password } = req.body;
  Coach.addCoach(name, email, password)
    .then(() => {
      res.redirect("dashboard");
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
