const Organization = require("../Models/organizationModel");

// @desc - create an organization
// @route - POST '/organizations'
// @access - public
const createOrganization = async (req, res) => {
  const organization = new Organization(req?.body);
  try {
    const newOrganization = await Organization.create(organization);
    res.json(newOrganization);
  } catch (err) {
    console.log(err);
  }
};

// @desc - delete an organization
// @route - DELETE '/organizations'
// @access - public
const deleteOrganization = async (req, res) => {
  const { id } = req?.body;
  if (!id)
    return res.status(400).json({ message: `organization ID is required.` });
  try {
    const organ = await Organization.findOne({ _id: id });
    if (!organ)
      return res
        .status(204)
        .json({ message: `no matches organization with ID: ${id}.` });
    await Organization.deleteOrganAndRemoveFromOwner(id);
    res.json(organ);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createOrganization, deleteOrganization };
