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

  if (owner && !owner.organizations.includes(organization._id)) {
    owner.organizations.push(organization._id);
    await owner.save();
  }

  next();
});

const Organization = mongoose.model("Organization", organizationSchema);

Organization.deleteOrganAndRemoveFromOwner = async function (organizationId) {
  const organ = await Organization.findOneAndDelete({ _id: organizationId });

  if (!organ) {
    throw new Error("Organization not found.");
  }

  const ownerId = organ.owner;

  if (ownerId) {
    const owner = await Owner.findById(ownerId);

    if (owner) {
      owner.organizations.pull(organizationId);
      await owner.save();
    }
  }
};

module.exports = Organization;
