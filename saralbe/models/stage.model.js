const mongoose = require("mongoose");

const StageSchema = new mongoose.Schema({
  name: String,
  required: true,
});

module.exports = mongoose.model("Stage", StageSchema);
