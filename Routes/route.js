const express = require("express");
const { createClass } = require("../Controller/classController");
const {
  createOrganization,
  deleteOrganization,
} = require("../Controller/organizationsController");
const {
  createOwner,
  updateOwner,
  getOrganOwner,
} = require("../Controller/ownerController");
const {
  getStudent,
  createStudent,
} = require("../Controller/studentController");
const {
  getTeacher,
  createTeacher,
} = require("../Controller/teacherController");

const router = express.Router();

router
  .route("/createStudent")
  .post(createStudent);
router
  .route("/createTeacher")
  .post(createTeacher);
router
  .route("/getStudent")
  .post(getStudent)
router
  .route("/getTeacher")
  .post(getTeacher)
router
  .route("/organizationOwner")
  .post(createOwner)
  .put(updateOwner);
router
  .route("/getOrganizationOwner")
  .post(getOrganOwner)

router
  .route("/organizations")
  .post(createOrganization)
  .delete(deleteOrganization);
router.route("/classes").post(createClass);

module.exports = router;
