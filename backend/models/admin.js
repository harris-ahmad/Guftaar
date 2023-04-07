const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
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

adminSchema.statics.addAdmin = async function (email, password) {
  const hash = await bcrypt.hash(password, 10);
  return new this({ email, password: hash }).save();
};

adminSchema.statics.authenticate = async function (email, password) {
  const admin = await this.findOne({ email });
  if (!admin) {
    return null;
  }
  const passwordMatched = await bcrypt.compare(password, admin.password);
  console.log(passwordMatched);
  if (!passwordMatched) {
    return null;
  }
  return admin;
};

adminSchema.statics.addHardCodedAdmin = async function () {
  const pass = "z65S8&v8SdCITewi";
  const hash = await bcrypt.hash(pass, 10);
  const admin = await this.findOne({
    email: "admin@guftaar.com",
    password: hash,
  });
  if (!admin) {
    return new this({
      email: "admin@guftaar.com",
      password: hash,
    }).save();
  }
  return admin;
};

adminSchema.statics.getTotalAdmins = async function () {
  return this.countDocuments();
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
