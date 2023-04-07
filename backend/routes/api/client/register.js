const express = require("express");
const passport = require("passport");
const Client = require("../../../models/client");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("register");
});

router.post(
  "/",
  (req, res, next) => {
    const { firstName, lastName, age, email, password } = req.body;
    console.log(req.body);
    Client.addUser(firstName, lastName, age, email, password)
      .then(() => {
        next();
      })
      .catch((err) => {
        res.redirect("/api/client/register");
        next(err);
      });
  },
  passport.authenticate("local", {
    successRedirect: "/api/client/dashboard",
    failureRedirect: "/api/client/login",
  })
);

module.exports = router;
