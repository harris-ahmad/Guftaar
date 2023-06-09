const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Client = require("../../models/user");
const Coach = require("../../models/user");
const crypto = require("crypto");
const Meetings = require("../../models/meeting");
require("dotenv").config();

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
  // console.log(req.body);
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
    .catch((err) => {
      res.send("We already have an account made with this email");
      // console.log("in error")
    });

  const token = new Client.Token({
    userId: newClient._id,
    token: crypto.randomBytes(32).toString("hex"),
  })
    .save()
    .then((response) => {
      // console.log(response);
    });
});

router.post("/login", (req, res) => {
  // console.log("in client?")
  const clientLogin = req.body;
  Client.Client.findOne({ email: clientLogin.email }).then((client) => {
    if (!client) {
      // console.log("Invalid Email or Password");
      return res.json({
        error: "Invalid Email or Password",
      });
    }
    bcrypt.compare(clientLogin.password, client.password, (err, result) => {
      if (result) {
        const token = jwt.sign(
          { id: client._id, username: client.firstName },
          process.env.SESS_SECRET, // TODO: Replace with env variable
          { expiresIn: 86400 },
          (err, token) => {
            if (err) {
              return res.json({ message: err });
            } else {
              // console.log("->Client logged in");
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
        // console.log("->Invalid Email or Password");
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
    .select("firstName lastName email rating qualification yearsOfExperience")
    .exec()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

router.post("/getClientDashboardDetails", (req, res) => {
  // console.log("Getting data for this user:", req.body.email)
  const { email } = req.body;
  Client.Client.findOne({ email: email })
    .select("firstName currentActiveCourse")
    .exec()
    .then((response) => {
      // console.log(response);
      res.send(response);
    })
    .catch((err) => {
      res.send({ error: err });
    });
});

router.post("/getStreak", async (req, res) => {
  // console.log("Got Request")
  const { email } = req.body;
  const user = await Client.Client.findOne({ email: email });
  // console.log("This USER: ",user)
  
  Client.Client.findOne({ email: email })
  .select("streakLastUpdated streakCount")
  .exec()
  .then(async (response) => {
    // console.log("GOT THESE:")
    console.log(response.streakLastUpdated)
    console.log(response.streakCount)
    let lastUpdated = response.streakLastUpdated
    // console.log("LAST UPDATED DATE")
    console.log(lastUpdated)
    const now = new Date();
    // console.log("starting")
    console.log(now.getTime())
    console.log(lastUpdated.getTime())
    const timeDiff = Math.abs(now.getTime() - lastUpdated.getTime());
    const diffHours = Math.ceil(timeDiff / (1000 * 60 * 60));
    if (diffHours > 24) {
      // console.log("Difference greater than 24 hours")
      user.streakCount = 0;
      user.activityStatus.linkLater = false;
      user.activityStatus.syllableCounting = false;
      user.activityStatus.breathingExercise = false;
      await user.save();
      res.json({streak: user.streakCount})
    }else{
      // console.log("Difference less than 24 hours")
      res.json({streak:response.streakCount})
    }
  })
  .catch((err) => {
    // console.log("in error")
    res.send({ error: err });
  });
});

router.post("/getMeetings", (req, res) => {
  let name = "";
  let date = "";
  const now = new Date();
  const { email } = req.body;

  Meetings.Meetings.find({ clientEmail: email })
    .select("coachEmail meetingDate ")
    .exec()
    .then((emailResponse) => {
      // console.log(emailResponse)
      const upcomingMeeting = emailResponse.find(
        (meeting) => meeting.meetingDate.getTime() > now.getTime()
      );
      // console.log(upcomingMeeting)

      if (upcomingMeeting) {
        date = upcomingMeeting.meetingDate;
        const coachEmail = upcomingMeeting.coachEmail;
        // console.log(coachEmail)

        Client.Coach.findOne({ email: coachEmail })
          .select("firstName")
          .exec()
          .then((nameResponse) => {
            name = nameResponse.firstName;

            let toSend = { name: name, time: date };
            // console.log(toSend);
            res.send(toSend);
            // console.log(nameResponse.firstName);
          })
          .catch((err) => {
            // console.log("In error for Name");
            res.send("");
          });
      } else {
        // console.log("time has passed");
        res.send("");
      }
    })
    .catch((err) => {
      // console.log("In email error");
      res.send({ error: err });
    });
});

router.post("/updateLinkLater", async (req, res) => {
  const { email, linkLater } = req.body;
  const user = await Client.Client.findOne({ email: linkLater });
  user.activityStatus.linkLater = true;
  await user.save();

  if (
    user.activityStatus.linkLater &&
    user.activityStatus.syllableCounting &&
    user.activityStatus.breathingExercise
  ) {
    user.streakCount += 1;
    await user.save();
  }
});

router.post("/updateSyllableCounting", async (req, res) => {
  const { email, syllableCounting } = req.body;
  const user = await Client.Client.findOne({ email: email });
  user.activityStatus.syllableCounting = true;
  await user.save();

  if (
    user.activityStatus.linkLater &&
    user.activityStatus.syllableCounting &&
    user.activityStatus.breathingExercise
  ) {
    user.streakCount += 1;
    await user.save();
  }
});

router.post("/updateBreathingExercise", async (req, res) => {
  const { email, breathingExercise } = req.body;
  const user = await Client.Client.findOne({ email: email });
  user.activityStatus.breathingExercise = true;
  await user.save();

  if (
    user.activityStatus.linkLater &&
    user.activityStatus.syllableCounting &&
    user.activityStatus.breathingExercise
  ) {
    user.streakCount += 1;
    await user.save();
  }
});

module.exports = router;
