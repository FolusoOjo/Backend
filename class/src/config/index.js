const mongoose = require("mongoose");

const connectToDB = () => {
  try {
    const DB_URI =
      "mongodb+srv://FolusoOjo:Foluso12!@cluster0.uguii.mongodb.net/classwork?retryWrites=true&w=majority&appName=Cluster0;";
    mongoose
      .connect(DB_URI)
      .then((data) => console.log("Connected to Database"))
      .catch((err) => console.log(err));
    console.log("Connected to Database");
  } catch (error) {
    console.log("Failed to connect to Database" + error);
  }
};

module.exports = connectToDB;
