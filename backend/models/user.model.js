const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    age: Number,
    weeklyReports: [
      {
        date: String,
        height: Number,
        weight: Number,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = { UserModel };
