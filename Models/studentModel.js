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
  homeworks: {
    type: Array,
    required: true,
    default: [],
    /*
    {
      title: "",
      description: "",
      isCompleted: Boolean
      grade: ""
    }
    */
  },
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
    Class.findById(classId)
  );

  const classes = await Promise.all(classPromises);

  classes.forEach((myClass) => {
    if (myClass) {
      myClass.students.push(student._id);
      myClass.save();
    }
  });

  next();
});

const Student = mongoose.model("Student", studentSchema);

Student.deleteStudentAndRemoveFromClass = async function (studentId) {
  const student = await Student.findOneAndDelete({ _id: studentId });

  if (!student) {
    throw new Error("Student not found.");
  }

  const classPromises = student.classes.map((classId) =>
    Class.findById(classId)
  );

  const classes = await Promise.all(classPromises);

  classes.forEach((myClass) => {
    if (myClass) {
      myClass.students.pull(studentId);
      myClass.save();
    }
  });
};

module.exports = Student;
