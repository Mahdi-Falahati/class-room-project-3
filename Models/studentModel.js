const mongoose = require("mongoose");
const Class = require("./classModel");

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  homeworks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Homework",
    },
  ],
  /*
    {
      title: "",
      description: "",
      isCompleted: Boolean
      grade: ""
    }
    */
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
});

studentSchema.pre("save", async function (next) {
  const student = this;

  const classPromises = student.classes.map((classId) =>
    Class.updateOne({ _id: classId }, { $addToSet: { students: student._id } })
  );

  await Promise.all(classPromises);

  next();
});

const Student = mongoose.model("Student", studentSchema);

Student.deleteStudentAndRemoveFromClass = async function (studentId) {
  const student = await Student.findOneAndDelete({ _id: studentId });

  if (!student) {
    throw new Error("Student not found.");
  }

  const classPromises = student.classes.map((classId) =>
    Class.updateOne({ _id: classId }, { $pull: { students: teacherId } })
  );

  await Promise.all(classPromises);
};

module.exports = Student;
