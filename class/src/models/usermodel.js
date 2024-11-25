const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Bio: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("Users", userSchema);
module.exports = User;
