const express = require("express");
const { ensureLoggedIn } = require("connect-ensure-login");

const router = new express.Router();

router.use(ensureLoggedIn("/api/client/login"));

router.get("/", (req, res) => {
  res.render("dashboard");
});

router.post("/addCoach", async (req, res) => {
  const { name, email, password } = req.body;
  Coach.addCoach(name, email, password)
    .then((coach) => {
      res.redirect("/api/client/dashboard");
    })
    .catch((err) => {
      res.render("dashboard", { err });
    });
});

module.exports = router;
