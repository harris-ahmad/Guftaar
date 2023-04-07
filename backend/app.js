const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const Client = require("./models/client");

const apiRouter = require("./routes/api/index");

const app = express();
const mongoConnection = mongoose.connect(
  "mongodb+srv://harrisahmad55:ladBob12@cluster0.4d91bik.mongodb.net/test"
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("trust proxy", true);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "harris123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
    },
    store: MongoStore.create({
      clientPromise: mongoConnection.then((self) =>
        self.connection.getClient()
      ),
      ttl: 1209600,
    }),
  })
);

passport.use(
  new LocalStrategy({ usernameField: "email" }, (username, password, done) => {
    Client.authenticate(username, password)
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err) => done(err));
  })
);

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { id: user.id });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => cb(null, user));
});

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", apiRouter);

mongoConnection
  .then(() => {
    app.listen(5001, () => {
      console.log(`listening on ${5001}`);
    });
  })
  .catch((err) => {
    console.log("database connection failed");
    console.log(err);
    mongoose.disconnect();
  });
