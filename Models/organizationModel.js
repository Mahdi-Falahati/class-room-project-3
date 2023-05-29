const mongoose = require("mongoose");
const Owner = require("./ownerModel");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      default: [],
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
  },
});

organizationSchema.pre("save", async function (next) {
  const organization = this;

  const owner = await Owner.findById(organization.owner);

  if (owner) {
    owner.organizations.push(organization._id);
    await owner.save();
  }

  next();
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
