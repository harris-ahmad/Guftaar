const express = require("express");
const { ensureLoggedIn } = require("connect-ensure-login");
const User = require("../../../models/client");

const router = new express.Router();

router.use(ensureLoggedIn("/api/client/login"));

router.get("/", (req, res) => {
  res.render("updatePassword");
});

router.post("/", (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  User.updatePassword(email, password)
    .then(() => {
      res.redirect("/api/client/login");
    })
    .catch((err) => {
      res.redirect("/api/client/updatePassword");
      next(err);
    });
});

module.exports = router;
