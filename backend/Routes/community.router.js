const express = require("express");
const communityRouter = express.Router();
const { CommunityModel } = require("../models/community.model");
const { GoalModel } = require("../models/goal.model");

communityRouter.get("/", async (req, res) => {
  try {
    const filterData = await GoalModel.find({ userID: req.body.userID });

    const filter = filterData[0].name;

    const data = await CommunityModel.find({ category: filter });

    res.send({ data });
  } catch (error) {
    res.send({ error });
  }
});

communityRouter.post("/add", async (req, res) => {
  const { title, body, time, userID } = req.body;

  try {
    const filterData = await GoalModel.find({ userID: req.body.userID });

    const filter = filterData[0].name;

    const data = new CommunityModel({
      title,
      body,
      time,
      category: filter,
      userID,
    });

    await data.save();
    res.send({ msg: "Post Added" });
  } catch (error) {
    res.send({ error });
  }
});

communityRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await CommunityModel.find({ _id: id });

    if (data[0].userID === req.body.userID) {
      await CommunityModel.findByIdAndUpdate({ _id: id }, req.body);

      res.send({ msg: "Post updated successfully." });
    } else {
      res.send({ msg: "You are not authorized." });
    }
  } catch (error) {
    res.send({ error });
  }
});

communityRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await CommunityModel.find({ _id: id });

    if (data[0].userID === req.body.userID) {
      await CommunityModel.findByIdAndRemove({ _id: id });

      res.send({ msg: "Post deleted successfully." });
    } else {
      res.send({ msg: "You are not authorized." });
    }
  } catch (error) {
    res.send({ error });
  }
});

module.exports = { communityRouter };
