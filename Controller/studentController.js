const Student = require("../Models/studentModel");

// @desc - get a student
// @route - Post '/getStudent'
// @access - public
const getStudent = async (req, res) => {
  const { username, password } = req?.body;
  try {
    const allStudents = await Student.find()
      .populate("homeworks")
      .populate("classes");
    if (!allStudents)
      return res.status(204).json({ message: "No student found" });

    const student = allStudents.filter((std) => std.username === username)[0];
    if (!student) return res.json({ message: "username is wrong" });
    if (student.password !== password)
      return res.json({ message: "password is wrong" });

    res.json(student);
  } catch (err) {
    console.log(err);
  }
};

// @desc - create a student
// @route - POST '/student'
// @access - public
const createStudent = async (req, res) => {
  const student = new Student(req?.body);
  try {
    const newStudent = await Student.create(student);
    res.json(newStudent);
  } catch (err) {
    console.log(err);
  }
};

// @desc - delete a student
// @route - DELETE '/teacher'
// @access - public
const deleteStudent = async (req, res) => {
  const { id } = req?.body;
  if (!id) return res.status(400).json({ message: `student ID is required.` });
  try {
    const student = await Student.findOne({ _id: id });
    if (!student)
      return res
        .status(204)
        .json({ message: `no matches student with ID: ${id}.` });
    await Student.deleteStudentAndRemoveFromClass(id);
    res.json(student);
  } catch (err) {
    console.log(err);
  }
};

// @desc - update a student
// @route - PUT '/teacher'
// @access - public
const updateStudent = async (req, res) => {
  const { id, student } = req?.body;
  if (!id) return res.status(400).json({ message: "ID parameter is required" });

  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, student);
    if (!updatedStudent)
      return res
        .status(204)
        .json({ message: `no student matches with ID: ${id}` });

    res.json(updatedStudent);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent,
};
