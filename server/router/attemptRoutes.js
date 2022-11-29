const express = require("express");
const attemptController = require("../controllers/attemptController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
router.get("/getstats", authMiddleware, attemptController.attemptStats);

// TESTING
module.exports = router;