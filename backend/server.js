const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

const clientRouter = require("./routes/client/client");
const coachRouter = require("./routes/coach/coach");
const adminRouter = require("./routes/admin/admin");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));

app.use("/client", clientRouter);
app.use("/coach", coachRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

const uri = process.env.DB;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection established");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
