const mongoose = require("mongoose");

const GoalSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    targetDate: { type: String, required: true },
    targetMetric: { type: String, required: true },
    userID: String,
  },
  {
    versionKey: false,
  }
);

const GoalModel = mongoose.model("goals", GoalSchema);

module.exports = { GoalModel };
