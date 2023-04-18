const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../../models/user");
const Coach = require("../../models/user");
const Client = require("../../models/user");
const crypto = require("crypto");

const router = new express.Router();

const verifyJWT = (req, res, next) => {
  const token = req.headers["accesstoken"];
  if (!token) {
    res.status(404).json({ isLoggedIn: false, message: "No token provided" });
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

router.post("/login", (req, res) => {
  const adminLogin = req.body;
  Admin.Admin.findOne({ email: adminLogin.email })
    .then((admin) => {
      if (!admin) {
        return res.json({
          error: "Invalid email or password",
        });
      }
      bcrypt.compare(adminLogin.password, admin.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { id: admin._id, email: admin.email }, // ! CONFIRM THIS if needs to be replaced with username
            "harris123",
            { expiresIn: 86400 },
            (err, token) => {
              if (err) {
                return res.json({ message: err });
              } else {
                return res.json({
                  message: "success",
                  token: token,
                  id: admin._id,
                  email: admin.email,
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

router.post("/addCoach", (req, res, next) => {
  const {
    firstName,
    lastName,
    gender,
    email,
    age,
    qualification,
    yearsOfExperience,
    password,
  } = req.body;
  const newCoach = new Coach.Coach({
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
    qualification: qualification,
    yearsOfExperience: yearsOfExperience,
    password: password,
    email: email,
  });
  newCoach
    .save()
    .then((response) => {
      res.send({ status: "success", message: "Coach registered" });
      next(response);
    })
    .catch((err) => {
      res.send({ status: "error", message: err });
    });

  const token = Coach.Token({
    userId: newCoach._id,
    token: crypto.randomBytes(32).toString("hex"),
  })
    .save()
    .then((response) => {
      console.log(response);
    });
});

router.post("/addAdmin", (req, res, next) => {
  const { firstName, lastName, gender, email, password, age } = req.body;
  const newAdmin = new Admin.Admin({
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
    password: password,
    email: email,
  });
  newAdmin
    .save()
    .then((response) => {
      res.send({ status: "success", message: "Admin registered" });
      next(response);
    })
    .catch((err) => {
      res.send({ status: "error", message: err });
    });

  const token = Admin.Token({
    userId: newAdmin._id,
    token: crypto.randomBytes(32).toString("hex"),
  })
    .save()
    .then((response) => {
      console.log(response);
    });
});

router.get("/getActorCount", (req, res) => {
  let data = { actorCount: {}, allCoaches: [{}] };
  Coach.Coach.find({})
    .select("firstName lastName rating")
    .then((coaches) => {
      data.actorCount.coaches = coaches.length;
      data.allCoaches = coaches;
      Client.Client.find({})
        .then((clients) => {
          data.actorCount.clients = clients.length;
          Admin.Admin.find({})
            .then((admins) => {
              data.actorCount.admins = admins.length;
              res.json({ data: data });
            })
            .catch((err) => {
              res.status(500).json({ error: err });
            });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.get("/getTopCoaches", (req, res) => {
  Coach.Coach.find({})
    .select("firstName lastName rating")
    .sort({ rating: -1 })
    .limit(4)
    .then((coaches) => {
      res.json({ coaches: coaches });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.get("/getAllCoaches", (req, res) => {
  // get the list of all coaches
  Coach.Coach.find({})
    .select("firstName lastName rating")
    .then((coaches) => {
      res.json({ coaches: coaches });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
