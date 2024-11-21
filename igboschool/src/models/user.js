const mongoose = require("mongoose");

const { Schema, model } = mongoose;
//Creating my schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  adminNo: {
    type: String,
    unique: true,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  isFee: {
    type: Boolean,
  },
});

//Create my model
const Users = new mongoose.model("students", userSchema);
