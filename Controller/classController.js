const Class = require("../Models/classModel");

// @desc - create a class
// @route - POST '/class'
// @access - public
const createClass = async (req, res) => {
  const newClass = new Class(req?.body);
  try {
    const createdClass = await Class.create(newClass);
    res.json(createdClass);
  } catch (err) {
    console.log("😒😒😒", err);
  }
};

// @desc - delete a class
// @route - DELETE '/classes'
// @access - public
const deleteClass = async (req, res) => {
  const { id } = req?.body;
  if (!id) return res.status(400).json({ message: "Class id is required" });
  try {
    const myClass = await Class.findOne({ _id: id });
    if (!myClass)
      return res
        .status(204)
        .json({ message: `no matches class with ID: ${id}.` });
    Class.deleteClassAndRemoveFromOrganization(id);
    res.json(myClass);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createClass, deleteClass };
