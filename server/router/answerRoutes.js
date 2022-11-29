const express = require("express");
const router = express.Router();
const answerController = require("../controllers/answerController");
const authMiddleware = require("../middleware/authMiddleware");
router.post("/submit", authMiddleware, answerController.submitTest);
router.post("/:questionID", authMiddleware, answerController.setTestAnswer);

// TESTING
module.exports = router;