const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://FolusoOjo:Foluso12!@cluster0.uguii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  stateoforigin: {
    type: String,
    // require: true
  },
});

const userModel = new mongoose.model("Children", childSchema);

app.get("/", (request, response) => {
  response.json({
    message: "Welcome to our backend application",
  });
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("saved");
});

app.post("/addnewchild", (req, res) => {
  console.log(req.body);
  const newChild = new userModel();
  newChild.name = req.body.name;
  newChild.age = req.body.age;
  newChild.stateoforigin = req.body.stateoforigin;

  newChild
    .save()
    .then(() => res.send("Registration sucessful"))
    .catch((err) => {
      console.log(err);
      res.send("Registration unsuccesful");
    });
});

app.get("/allchildren", (req, res) => {
  userModel
    .find()
    .then((data) => {
      console.log(data);
      res.json({
        message: "Data found",
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send("Data not found");
    });
});

const port = process.env.PORT || 4000;

app.listen(port, console.log("Port:", port));
