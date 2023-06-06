const Homework = require("../Models/homeworkModel");

// @desc - create a homework
// @route - POST '/homework'
// @access - public
const createHomework = async (req, res) => {
  const homework = new Homework(req?.body);
  try {
    const newHomework = await Homework.create(homework);
    res.json(newHomework);
  } catch (err) {
    console.log(err);
  }
};

// @desc - delete a homework
// @route - DELETE '/homework'
// @access - public
const deleteHomework = async (req, res) => {
  const { id } = req?.body;
  if (!id) return res.status(400).json({ message: `homework ID is required.` });
  try {
    const homework = await Homework.findOne({ _id: id });
    if (!homework)
      return res
        .status(204)
        .json({ message: `no matches homework with ID: ${id}.` });
    await Homework.deleteHomeworkAndRemoveFromStudents(id);
    res.json(homework);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createHomework,
  deleteHomework,
};
