const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRouter.post("/register", async (req, res) => {
  const { name, email, password, gender, age, weeklyReports } = req.body;

  try {
    const ifAvailable = await UserModel.find({ email });

    if (ifAvailable.length > 0) {
      res.status(200).send({ msg: "Account already exists" });
    } else {
      bcrypt.hash(password, 4, async (err, hash) => {
        if (err) console.log(err);
        const user = new UserModel({
          name,
          email,
          password: hash,
          gender,
          age,
          weeklyReports,
        });
        await user.save();
      });
      res.status(200).send({ msg: "Registration successful" });
    }
  } catch (err) {
    res.status(400).send({ msg: "Something went wrong, Try Again" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (err) console.log(err);

        if (result) {
          const userData = await UserModel.find({ email });

          res.status(200).send({
            msg: "login successful",
            token: jwt.sign({ userID: user[0]._id }, process.env.SECRET_KEY),
            data: userData,
          });
        } else {
          res.status(400).send({ msg: "wrong credential" });
        }
      });
    } else {
      res.status(400).send({ msg: "User doesn't exist" });
    }
  } catch (err) {
    res.status(400).send({ msg: "Something went wrong. Try again" });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).send({ data });
  } catch (error) {
    res.status(400).send({ msg: "Something went wrong. Try again" });
  }
});

userRouter.post("/weekly-report/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newWeeklyReport = req.body;

    const user = await UserModel.findById({ _id: id });
    if (!user) {
      res.status(404).send({ msg: "User not found" });
    } else {
      user.weeklyReports.push(newWeeklyReport);
      await user.save();

      res.status(200).send({ msg: "Weekly report added successfully" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
  }
});

module.exports = { userRouter };
