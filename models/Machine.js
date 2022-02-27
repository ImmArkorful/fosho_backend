const mongoose = require("mongoose");

const machineSchema = mongoose.Schema(
  {
    id: Number,
    status: Boolean,
    hours: String,
    minutes: String,
    user: String,
  },
  { timestamps: true }
);

const Machine = mongoose.model("Machine", machineSchema);

module.exports = Machine;
