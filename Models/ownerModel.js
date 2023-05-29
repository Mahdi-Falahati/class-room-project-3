const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  organizations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      default: [],
    },
  ],
});

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
