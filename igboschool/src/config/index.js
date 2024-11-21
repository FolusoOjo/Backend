const mongoose = require("mongoose");

const connectToDB = () => {
  //Connect to my database
  try {
    const DB_URI = "mongodb://localhost:27017/IgboGroupOfSchool";
    mongoose.connect(DB_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Failed to connect to Database" + error);
  }
};

module.exports = connectToDB;
