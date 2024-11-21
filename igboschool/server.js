const express = require("express");
const connectToDB = require("./src/config/index");

const app = express();
app.use(express.json());
// app.use("/api/v1")
connectToDB();

const PORT = 3031;
app.listen(PORT, () => {
  console.log(`Server on port : ${PORT}`);
});
