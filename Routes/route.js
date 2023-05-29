const express = require("express");
const {
  createStudent,
  createTeacher,
  getStudent,
  getTeacher,
  getOrganizationOwner,
  createOrganizationOwner,
} = require("../Controller/controller");

const router = express.Router();

router.route("/student").get(getStudent).post(createStudent);
router.route("/teacher").get(getTeacher).post(createTeacher);
router
  .route("/organizationOwner")
  .get(getOrganizationOwner)
  .post(createOrganizationOwner);
router.route("/organizations").post(createOrganizationOwner);
router.route("/classes").post(createClass);

module.exports = router;
