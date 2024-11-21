const mongoose = require("mongoose");

const connectToDB = () => {
  //Connect to my database

  const DB_URI =
    "mongodb+srv://FolusoOjo:Foluso12!@cluster0.uguii.mongodb.net/jobberman?retryWrites=true&w=majority&appName=Cluster0;";
  mongoose
    .connect(DB_URI)
    .then((data) => console.log("Connected to Database"))
    .catch((err) => console.log("error "));
};

module.exports = connectToDB;
