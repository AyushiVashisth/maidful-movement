const express = require("express");
const goalRouter = express.Router();
const jwt = require("jsonwebtoken");
const { GoalModel } = require("../models/goal.model");

goalRouter.post("/add", async (req, res) => {
  try {
    const data = GoalModel(req.body);
    await data.save();

    res.send({ msg: "Goal set successfully!" });
  } catch (error) {
    res.send({ error });
  }
});

goalRouter.get("/", async (req, res) => {
  const { userID } = req.body;

  try {
    const goal = await GoalModel.find({ userID });

    res.send({ data: goal });
  } catch (error) {
    res.send({ error });
  }
});

goalRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const goal = await GoalModel.find({ _id: id });

    if (goal[0].userID === req.body.userID) {
      await GoalModel.findByIdAndUpdate({ _id: id }, req.body);
      res.send({ msg: "Goal updated successfully" });
    } else {
      res.send({ msg: "Set a goal first" });
    }
  } catch (error) {
    res.send({ error });
  }
});

module.exports = { goalRouter };
