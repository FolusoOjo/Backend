const express = require("express");
const connectToDB = require("./src/config");
const userRouter = require("./src/routes/userroutes");

const app = express();
app.use(express.json());
connectToDB();

app.use("/api/v1/users", userRouter);

const PORT = 3000;
app.listen(PORT, console.log("App connected to port:", PORT));
