const express = require("express");
const router = express.Router();
const listViewController = require("../controllers/listViewController");
const authMiddleware = require("../middleware/authMiddleware");
router.get("/", authMiddleware, listViewController.getStreamList);
router.get(
    "/questions/:streamID/:courseID/:subjectID",
    authMiddleware,
    listViewController.getQuestionList
);

router.get("/:streamID", authMiddleware, listViewController.getCourseList);
router.get(
    "/:streamID/:courseID",
    authMiddleware,
    listViewController.getSubjectList
);
router.get(
    "/:streamID/:courseID/:subjectID",
    authMiddleware,
    listViewController.getChapterList
);
router.get(
    "/:streamID/:courseID/:subjectID/:chapterID",
    authMiddleware,
    listViewController.getTopicList
);

// TESTING
module.exports = router;