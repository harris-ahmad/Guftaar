const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Client = require("../../models/user");
const Coach = require("../../models/user");
const crypto = require("crypto");

const router = new express.Router();

const verifyJWT = (req, res, next) => {
  const token = req.headers["accesstoken"];
  if (!token) {
    res.json({ isLoggedIn: false, message: "No token provided" });
  } else {
    jwt.verify(token, "harris123", (err, decoded) => {
      // TODO: Replace with env variable
      if (err) {
        return res.json({ isLoggedIn: false, message: "Invalid token" });
      } else {
        req.user = {};
        req.userId = decoded.id;
        req.user.username = decoded.username;
        next();
      }
    });
  }
};

router.get("/", (req, res) => {
  res.send("Client route");
});

router.post("/register", (req, res, next) => {
  const { firstName, lastName, age, email, password } = req.body;
  console.log(req.body);
  const newClient = new Client.Client({
    firstName: firstName,
    lastName: lastName,
    age: age,
    email: email,
    password: password,
    dateOfJoining: Date.now(),
  });
  newClient
    .save()
    .then((response) => {
      res.send({ status: "success", message: "Client registered" });
      next(response);
    })
    .catch((err) => {});

  const token = new Client.Token({
    userId: newClient._id,
    token: crypto.randomBytes(32).toString("hex"),
  })
    .save()
    .then((response) => {
      console.log(response);
    });
});

router.post("/login", (req, res) => {
  const clientLogin = req.body;
  Client.Client.findOne({ email: clientLogin.email }).then((client) => {
    if (!client) {
      console.log("Invalid Email or Password");
      return res.json({
        error: "Invalid Email or Password",
      });
    }
    bcrypt.compare(clientLogin.password, client.password, (err, result) => {
      if (result) {
        const token = jwt.sign(
          { id: client._id, username: client.firstName },
          "harris123", // TODO: Replace with env variable
          { expiresIn: 86400 },
          (err, token) => {
            if (err) {
              return res.json({ message: err });
            } else {
              console.log("->Client logged in");
              return res.json({
                message: "success",
                token: token,
                id: client._id,
                email: client.email,
              });
            }
          }
        );
      } else {
        console.log("->Invalid Email or Password");
        res.json({
          error: "Invalid Email or Password",
        });
      }
    });
  });
});

router.post("/changePassword", (req, res) => {
  const pass = req.body.new;
  const id = req.body.id;
  const salted = req.body.salted;
  Client.Client.updateOne(
    { _id: id },
    { $set: { password: pass, salt: salted } }
  )
    .exec()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

router.post("/getPass", (req, res) => {
  Client.Client.find({ _id: req.body.id })
    .exec()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

router.get("/coaches", (req, res) => {
  Coach.Coach.find({})
    .select("firstName lastName")
    .exec()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

router.post("/getClientDashboardDetails", (req, res) => {
  console.log("Getting data for this user:", req.body.email)
  const { email } = req.body;
  Client.Client.findOne({ email: email })
    .select(
      "firstName currentActiveCourse"
    ) 
    .exec()
    .then((response) => {
      console.log(response)
      res.send(response);
    })
    .catch((err) => {
      res.send({ error: err });
    });
});

router.post("/getStreak", (req, res) => {
  // console.log("Getting data for this user:", req.body.email)
  const { email } = req.body;
  Client.Client.findOne({ email: email })
    .select(
      "streakCount"
    ) 
    .exec()
    .then((response) => {
      console.log(response)
      res.send(response);
    })
    .catch((err) => {
      res.send({ error: err });
    });
});

module.exports = router;
