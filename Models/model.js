const mongoose = require("mongoose");

// Define the Student schema
const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  classes: {
    type: Array,
    required: true,
  },
  homeworks: {
    type: Array,
    required: true,
  },
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
});

// Define the Teacher schema
const teacherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  classes: {
    type: Array,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  assignedTasks: {
    type: Object,
  },
});

// Define the Organization schema
const organizationOwnerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
});

// Create the Student model
const Student = mongoose.model("Student", studentSchema);

// Create the Teacher model
const Teacher = mongoose.model("Teacher", teacherSchema);

// Create the OrganizationOwner model
const OrganizationOwner = mongoose.model(
  "Organization",
  organizationOwnerSchema
);

module.exports = { Student, Teacher, OrganizationOwner };
