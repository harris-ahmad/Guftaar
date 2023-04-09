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

const coachSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  qualification: { type: String, required: true },
  yearsOfExperience: { type: Number, required: true },
  password: { type: String, required: true },
  salt: { type: String }, // ? Do we need this?
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Invalid email"],
  },
});

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Invalid email"],
  },
  password: { type: String, required: true },
  salt: { type: String },
});

const tokenSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), expires: 3600 },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
