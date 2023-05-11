const express = require("express");
require("dotenv").config();
const app = express();
const connection = require("./config/db");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const userRouter = require("./Routes/feed.Router");
app.use("/feed", feetRouter);

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.send(`<h1>Maidfull Movement Backend</h1>`);
});


const port = process.env.PORT;
app.listen(port, async () => {
  try {
    await connection;
    console.log("connected to Database");
  } catch (error) {
    console.log("unable to connect to database");
    res.status(404).send(error.message);
  }
  console.log(`Server is running on port ${port}`);
});
