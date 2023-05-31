const express = require("express");
const { createClass, deleteClass } = require("../Controller/classController");
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
  deleteStudent,
} = require("../Controller/studentController");
const {
  getTeacher,
  createTeacher,
  deleteTeacher,
} = require("../Controller/TeacherController");

const router = express.Router();

router
  .route("/student")
  .get(getStudent)
  .post(createStudent)
  .delete(deleteStudent);
router
  .route("/teacher")
  .get(getTeacher)
  .post(createTeacher)
  .delete(deleteTeacher);
router
  .route("/organizationOwner")
  .get(getOwner)
  .post(createOwner)
  .put(updateOwner);

router
  .route("/organizations")
  .post(createOrganization)
  .delete(deleteOrganization);
router.route("/classes").post(createClass).delete(deleteClass);

module.exports = router;
