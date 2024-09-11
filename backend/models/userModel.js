const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!validator.isEmail(email)) {
    throw Error("Enter a proper email please.");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Not a strong enough password.");
  }
  const user = await this.findOne({ email });
  if (user) {
    throw Error("This email is already in use.");
  }
  console.log("in here");
  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);
  const createdUser = await this.create({ email, password: hashedPassword });

  return createdUser;
};

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const checkPasswords = await bcrypt.compare(password, user.password);
    if (checkPasswords) {
      return user;
    }
    throw Error("Passwords do not match.");
  }
  throw Error("No user found with that email.");
};

module.exports = mongoose.model("userAuth", userSchema);
