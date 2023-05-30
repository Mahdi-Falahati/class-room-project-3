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
    Class.findById(classId)
  );

  const classes = await Promise.all(classPromises);

  classes.forEach((myClass) => {
    if (myClass) {
      myClass.teachers.push(teacher._id);
      myClass.save();
    }
  });

  next();
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
