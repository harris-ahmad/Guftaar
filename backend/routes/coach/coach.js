const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Coach = require("../../models/user");

const router = new express.Router();

router.post("/login", (req, res) => {
  const coachLogin = req.body;
  Coach.Coach.findOne({ email: coachLogin.email })
    .then((coach) => {
      if (!coach) {
        return res.json({
          error: "Invalid email or password",
        });
      }
      bcrypt.compare(coachLogin.password, coach.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { id: coach._id, email: coach.email },
            process.env.SESS_SECRET,
            { expiresIn: 86400 },
            (err, token) => {
              if (err) {
                return res.json({ message: err });
              } else {
                return res.json({
                  message: "success",
                  token: token,
                  id: coach._id,
                  email: coach.email,
                });
              }
            }
          );
        } else {
          res.json({ error: "Invalid email or password" });
        }
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.post("/changePassword", (req, res) => {
  const pass = req.body.new;
  const id = req.body.id;
  const salted = req.body.salted;
  Coach.Coach.updateOne({ _id: id }, { $set: { password: pass, salt: salted } })
    .exec()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

module.exports = router;
