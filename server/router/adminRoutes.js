const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.get("/customer/list", adminController.customerList);
router.get("/customer/:customerID", adminController.customerDetails);
router.get("/approve/list", adminController.approveList);
router.post("/approve/:customerID", adminController.approveCustomer);

// router.route();

module.exports = router;