const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema(
  {
    name: String,
    calories: String,
    protien: String,
    carbs: String,
    fat: String,
    userID: String,
  },
  {
    versionKey: false,
  }
);

const FoodModel = mongoose.model("foods", FoodSchema);

module.exports = { FoodModel };
