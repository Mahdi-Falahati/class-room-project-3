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

module.exports = { createClass };
