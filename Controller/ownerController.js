const Owner = require("../Models/ownerModel");

// @desc - get a organization owner
// @route - GET '/organizationOwner'
// @access - public
const getOwner = async (req, res) => {
  const { username, password } = req?.body;

  try {
    const allOwner = await Owner.find().populate({
      path: "organizations",
      populate: {
        path: "classes",
        populate: {
          path: "teachers",
          model: "Teacher",
        },
        populate: {
          path: "students",
          model: "Student",
        },
      },
    });
    if (!allOwner)
      return res.status(204).json({ message: "No organization owner found" });

    const organizationOwner = allOwner.filter(
      (owner) => owner.username === username
    )[0];
    if (!organizationOwner) return res.json({ message: "username is wrong" });
    if (organizationOwner.password !== password)
      return res.json({ message: "password is wrong" });

    res.json(organizationOwner);
  } catch (err) {
    console.log(err);
  }
};

// @desc - create a organization owner
// @route - POST '/organizationOwner'
// @access - public
const createOwner = async (req, res) => {
  const owner = new Owner(req?.body);
  try {
    const newOwner = await Owner.create(owner);
    res.json(newOwner);
  } catch (err) {
    console.log(err);
  }
};

// @desc - update a owner
// @route - PUT '/organizationOwner'
// @access - public
const updateOwner = async (req, res) => {
  const { id, owner } = req?.body;
  if (!id) return res.status(400).json({ message: "ID parameter is required" });

  try {
    const updatedOwner = await Owner.findByIdAndUpdate(id, owner);
    if (!updatedOwner)
      return res
        .status(204)
        .json({ message: `no owner matches with ID: ${id}` });

    res.json(updatedOwner);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getOwner, createOwner, updateOwner };

/***************** main owner can delete this owner *****************/
// @desc - delete a organization owner
// @route - DELETE '/organizationOwner'
// @access - public
// const deleteOwner = async (req, res) => {
//   const { id } = req?.body;
//   if (!id) return res.status(400).json({ message: `student ID is required.` });
//   try {
//     const owner = await Owner.findOne({ _id: id });
//     if (!owner)
//       return res
//         .status(204)
//         .json({ message: `no matches owner with ID: ${id}.` });
//     await owner.deleteOne();
//     res.json(owner);
//   } catch (err) {
//     console.log(err);
//   }
// };
