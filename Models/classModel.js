const mongoose = require("mongoose");
const Organization = require("./organizationModel");

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      default: [],
    },
  ],
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: [],
    },
  ],
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
  },
});

classSchema.pre("save", async function (next) {
  const newClass = this;

  const organization = await Organization.findById(newClass.organization);

  if (organization) {
    organization.classes.push(newClass._id);
    await organization.save();
  }

  next();
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
