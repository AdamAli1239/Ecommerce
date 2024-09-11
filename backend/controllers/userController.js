const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const createToken = (_id) => {
  console.log("we created token");
  return jwt.sign({ _id }, process.env.JWTSECRET, { expiresIn: "3d" });
};

const signUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("in heresadas");
    const user = await userModel.signup(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge: 900000, httpOnly: true });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logUserIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const logedInUser = await userModel.login(email, password);
    const token = createToken(logedInUser._id);
    res.cookie("jwt", token, { maxAge: 900000, httpOnly: true });
    res.status(200).json({ logedInUser, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  signUser,
  logUserIn,
};
