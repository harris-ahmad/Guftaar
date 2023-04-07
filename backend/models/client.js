const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw new Error("Password is not strong enough");
      }
    },
  },
});

userSchema.statics.addUser = async function (
  firstName,
  lastName,
  age,
  email,
  password
) {
  const hash = await bcrypt.hash(password, 10);
  return new this({ firstName, lastName, age, email, password: hash }).save();
};

userSchema.statics.authenticate = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    return null;
  }

  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) {
    return null;
  }

  return user;
};

userSchema.statics.deleteUser = async function (email) {
  return this.deleteOne({ email });
};

// write a method to update the password
userSchema.statics.updatePassword = async function (email, password) {
  const hash = await bcrypt.hash(password, 10);
  const user = await this.findOne({ email });
  if (user) {
    return this.updateOne({ email }, { password: hash });
  } else {
    return null;
  }
};

// write a function to get the total number of clients in the database
userSchema.statics.getTotalClients = async function () {
  return this.countDocuments();
};

module.exports = mongoose.model("client", userSchema);
