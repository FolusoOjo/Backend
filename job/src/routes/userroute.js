const express = require("express");
const UserService = require("../services/userservice");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Welcome to the user route");
});

userRouter.post("/signup", UserService().SignUserUp);

module.exports = userRouter;
