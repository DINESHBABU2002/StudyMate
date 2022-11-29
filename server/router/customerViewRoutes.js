const express = require("express");
const customerViewController = require("../controllers/customerViewController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

//Routes

// ROUTES :: Stream

router.get(
    "/stream/list",
    authMiddleware,
    customerViewController.getStreamList
);
router.get(
    "/stream/:streamID",
    authMiddleware,
    customerViewController.getStream
);

// ROUTES :: Course

router.get(
    "/course/list",
    authMiddleware,
    customerViewController.getCourseList
);
router.get(
    "/course/:courseID",
    authMiddleware,
    customerViewController.getCourse
);

// ROUTES :: SUBJECT

router.get(
    "/subject/list",
    authMiddleware,
    customerViewController.getSubjectList
);
router.get(
    "/subject/:subjectID",
    authMiddleware,
    customerViewController.getSubject
);

// ROUTES :: CHAPTER

router.get(
    "/chapter/list",
    authMiddleware,
    customerViewController.getChapterList
);
router.get(
    "/chapter/:chapterID",
    authMiddleware,
    customerViewController.getChapter
);

// ROUTES :: TOPIC

router.get("/topic/list", authMiddleware, customerViewController.getTopicList);
router.get("/topic/:topicID", authMiddleware, customerViewController.getTopic);

//ROUTES :: CERTIFICATES

router.get(
    "/certificate/list",
    authMiddleware,
    customerViewController.getCertificateList
);
router.get(
    "/certificate/:certificateID",
    authMiddleware,
    customerViewController.getCertificate
);
//ROUTES :: QUESTION

router.get(
    "/question/list",
    authMiddleware,
    customerViewController.getQuestionList
);
router.get(
    "/question/:QuestionID",
    authMiddleware,
    customerViewController.getQuestion
);

// EXPORT ROUTE
module.exports = router;