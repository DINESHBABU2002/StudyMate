const express = require("express");
const customerAdminController = require("../controllers/customerAdminController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

//Routes

// ROUTES :: Stream
router.put("/stream/add", authMiddleware, customerAdminController.addStream);

// ROUTES :: Course
router.put("/course/add", authMiddleware, customerAdminController.addCourse);

// ROUTES :: SUBJECT
router.put("/subject/add", authMiddleware, customerAdminController.addSubject);

// ROUTES :: CHAPTER
router.put("/chapter/add", authMiddleware, customerAdminController.addChapter);

// ROUTES :: TOPIC
router.put("/topic/add", authMiddleware, customerAdminController.addTopic);

// ROUTES :: TOPIC
router.put(
  "/certification/add",
  authMiddleware,
  customerAdminController.addCertificate
);

// ROUTES :: QUESTION
router.put(
  "/question/add",
  authMiddleware,
  customerAdminController.addQuestion
);

module.exports = router;
