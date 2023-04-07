const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const coachSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: validator.isStrongPassword,
      message: "{VALUE} is not a strong password",
    },
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Coach = mongoose.model("Coach", coachSchema);

coachSchema.statics.addCoach = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new this({
    name,
    email,
    password: hashedPassword,
  }).save();
};

coachSchema.statics.authenticate = async (email, password) => {
  const coach = await this.findOne({ email });
  if (!coach) {
    return null;
  }
  const passwordMatched = await bcrypt.compare(password, coach.password);
  if (!passwordMatched) {
    return null;
  }
  return coach;
};

// write a function to display the names of all coaches in the database in the order of their rating (highest to lowest)
coachSchema.statics.displayCoaches = async () => {
  const coaches = await this.find({}).select("name rating");
  return coaches.sort((a, b) => b.rating - a.rating);
};

coachSchema.statics.getTotalCoaches = async () => {
  return this.countDocuments();
};

module.exports = Coach;
