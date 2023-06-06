const mongoose = require("mongoose");
const Organization = require("./organizationModel");

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    default: null,
  },

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

Class.deleteClassAndRemoveFromOrganization = async function (classId) {
  const myClass = await Class.findOneAndDelete({ _id: classId });

  if (!myClass) {
    throw new Error("Class not found.");
  }

  const organizationId = myClass.organization;

  if (organizationId) {
    const organization = await Organization.findById(organizationId);

    if (organization) {
      organization.classes.pull(classId);
      await organization.save();
    }
  }
};

module.exports = Class;
