const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
