const mongoose = require("mongoose");
const Class = require("./classModel");

const teacherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
  // the task that student assign to the teacher
  assignedTasks: {
    type: Array,
    default: [],
  },
});

teacherSchema.pre("save", async function (next) {
  const teacher = this;

  const classPromises = teacher.classes.map((classId) =>
    Class.updateOne({ _id: classId }, { $set: { teacher: teacher._id } })
  );

  await Promise.all(classPromises);

  next();
});

const Teacher = mongoose.model("Teacher", teacherSchema);

Teacher.deleteTeacherAndRemoveFromClass = async function (teacherId) {
  const teacher = await Teacher.findOneAndDelete({ _id: teacherId });

  if (!teacher) {
    throw new Error("Teacher not found.");
  }

  const classPromises = teacher.classes.map((classId) =>
    Class.updateOne({ _id: classId }, { $set: { teacher: null } })
  );

  await Promise.all(classPromises);
};

module.exports = Teacher;
