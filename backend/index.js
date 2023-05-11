const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const app = express();
const port = process.env.PORT;
require("dotenv").config();

const { feedRouter } = require("./Routes/feed.Router");
const { userRouter } = require("./Routes/user.Router");
const { goalRouter } = require("./Routes/goal.router");
const { communityRouter } = require("./Routes/community.router");
const { authentication } = require("./middlewares/Authtentication");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.send(`<h1>Maidfull Movement Backend</h1>`);
});

app.use("/feed", feedRouter);

app.use("/user", userRouter);

app.use(authentication);
app.use("/goal", goalRouter);
app.use("/community", communityRouter);

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
