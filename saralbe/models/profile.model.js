const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  stage: {
    type: Schema.Types.ObjectId,
    ref: "Stage",
  },
});

module.exports = mongoose.model("Profile", profileSchema);
