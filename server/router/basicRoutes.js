const express = require("express");
const AutheneticationController = require("../controllers/AutheneticationController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// TESTING
router.get("/", (req, res) => {
    console.log("req recived");
    aaaaaaaa;
    res.end("data");
});

router.post("/login", AutheneticationController.Login);
router.put("/signup/customer", AutheneticationController.SignupCustomer);
router.post("/signup/user", AutheneticationController.SignupUser);
router.get("/logout", (req, res) => {
    res.clearCookie("jwt");
    res.send("logout");
});
router.get("/me", authMiddleware, AutheneticationController.me);
module.exports = router;