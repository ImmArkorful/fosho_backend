const mongoose = require("mongoose");

const historySchema = mongoose.Schema(
  {
    machine: String,
    date: String,
    user: String,
  },
  { timestamps: true }
);

const History = mongoose.model("History", historySchema);

module.exports = History;
