const Teacher = require("../Models/teacherModel");

// @desc - get a teacher
// @route - GET '/teacher'
// @access - public
const getTeacher = async (req, res) => {
  const { username, password } = req?.body;
  try {
    const allTeachers = await Teacher.find();
    if (!allTeachers)
      return res.status(204).json({ message: "No teacher found" });

    const teacher = allTeachers.filter((tch) => tch.username === username);
    if (!teacher) return res.json({ message: "username is wrong" });
    if (teacher.password !== password)
      return res.json({ message: "password is wrong" });

    res.json(teacher);
  } catch (err) {
    console.log(err);
  }
};

// @desc - create a teacher
// @route - POST '/organizationOwner'
// @access - public
const createTeacher = async (req, res) => {
  const teacher = new Teacher(req?.body);
  try {
    const newTeacher = await Teacher.create(teacher);
    res.json(newTeacher);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getTeacher, createTeacher };
