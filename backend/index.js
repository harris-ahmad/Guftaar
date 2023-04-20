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
const port = process.env.PORT || 5003;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));

app.use("/client", clientRouter);
app.use("/coach", coachRouter);
app.use("/admin", adminRouter);

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});


const uri = "mongodb+srv://harrisahmad55:ladBob12@cluster0.4d91bik.mongodb.net/guftaar";
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection established");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
