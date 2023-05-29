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
    type: Object,
    required: true,
  },
  accesses: {
    type: Array, // ["add student", "delete student"]
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
  accesses: {
    type: Array, // ["add student", "delete student"]
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  // the task that student assign to the teacher
  assignedTasks: {
    type: Object,
  },
});

// Define the Organization schema
const customRoleSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roleName: {
    type: String,
    required: true,
  },
  accesses: {
    type: Array, // ["add student", "delete student"]
    required: true,
  },
});

const organizationOwnerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accesses: {
    type: Array, // ["add student", "delete student"]
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

// Create the CustomRole model
const customRole = mongoose.model("CustomRole", customRoleSchema);

// Create the OrganizationOwner model
const OrganizationOwner = mongoose.model(
  "Organization",
  organizationOwnerSchema
);

module.exports = { Student, Teacher, customRole, OrganizationOwner };
