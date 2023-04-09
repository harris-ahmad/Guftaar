const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  salt: { type: String },
  password: { type: String, required: true },
  dateOfJoining: { type: Date, default: Date.now() },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Invalid email"],
  },
  logRecord: [
    {
      date: { type: Date, default: Date.now() },
      id: { type: Schema.Types.ObjectId },
      content: { type: String, default: "" },
    },
  ],
  currentActiveCourse: {
    type: String,
    ref: "Course",
    default: "",
  },
  streakLastUpdated: { type: Date, default: Date.now() },
  streakCount: { type: Number, default: 0 },
  syllableTotal: { type: Number, default: 0 },
  syllableCorrect: { type: Number, default: 0 },
  quickPracticeRate: { type: Number, default: 0 },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
