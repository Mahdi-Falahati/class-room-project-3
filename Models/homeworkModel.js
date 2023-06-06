const mongoose = require("mongoose");
const Class = require("./classModel");
const Student = require("./studentModel");

const homeworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  grade: {
    type: Number,
    default: 0,
  },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      default: [],
    },
  ],
});

homeworkSchema.pre("save", async function (next) {
  const homework = this;

  const classPromises = homework.classes.map((classId) =>
    Class.findById(classId)
  );

  const classes = await Promise.all(classPromises);

  const studentPromises = [];
  classes.forEach((myClass) => {
    if (myClass) {
      studentPromises.push(
        ...myClass.students.map((studentId) => ({
          updateOne: {
            filter: { _id: studentId },
            update: { $addToSet: { homeworks: homework._id } },
          },
        }))
      );
    }
  });
  await Student.bulkWrite(studentPromises);
});

const Homework = mongoose.model("Homework", homeworkSchema);

Homework.deleteHomeworkAndRemoveFromStudents = async function (homeworkId) {
  const homework = await Homework.findOneAndDelete({ _id: homeworkId });

  if (!homework) {
    throw new Error("Homework not found.");
  }

  const classPromises = homework.classes.map((classId) =>
    Class.findById(classId)
  );
  const classes = await Promise.all(classPromises);

  const studentPromises = [];
  classes.forEach((myClass) => {
    if (myClass) {
      studentPromises.push(
        ...myClass.students.map((studentId) => ({
          updateOne: {
            filter: { _id: studentId },
            update: { $pull: { homeworks: homeworkId } },
          },
        }))
      );
    }
  });

  await Student.bulkWrite(studentPromises);
};

module.exports = Homework;
