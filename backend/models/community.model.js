const mongoose = require("mongoose");

const CommunitySchema = mongoose.Schema(
  {
    title: String,
    body: String,
    category: String,
    time: String,
    userID: String,
  },
  {
    versionKey: false,
  }
);

const CommunityModel = mongoose.model("community", CommunitySchema);

module.exports = { CommunityModel };
