const express = require("express");
const { createClass } = require("../Controller/classController");
const {
  createOrganization,
  deleteOrganization,
} = require("../Controller/organizationsController");
const {
  createOwner,
  updateOwner,
  getOwner,
} = require("../Controller/ownerController");
const {
  getStudent,
  createStudent,
} = require("../Controller/studentController");
const {
  getTeacher,
  createTeacher,
} = require("../Controller/TeacherController");

const router = express.Router();

router.route("/student").get(getStudent).post(createStudent);
router.route("/teacher").get(getTeacher).post(createTeacher);
router
  .route("/organizationOwner")
  .post(createOwner)
  .put(updateOwner);
router
  .route("/organizationOwnerP")
  .post(getOwner)

router
  .route("/organizations")
  .post(createOrganization)
  .delete(deleteOrganization);
router.route("/classes").post(createClass);

module.exports = router;
