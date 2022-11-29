const express = require("express");
const router = express.Router();
const basicRoutes = require("./router/basicRoutes");
const adminRoutes = require("./router/adminRoutes");
const customerAdminRoutes = require("./router/customerAdminRoutes");
const customerViewRoutes = require("./router/customerViewRoutes");
const listViewRoutes = require("./router/listViewRoutes");
const answerRoutes = require("./router/answerRoutes");
const attemptRoutes = require("./router/attemptRoutes");

// version routes

// VERSION 1
router.use("/v1", basicRoutes);
router.use("/v1/admin", adminRoutes);
router.use("/v1/customer/:tenantID/admin", customerAdminRoutes);
router.use("/v1/customer/:tenantID/view", customerViewRoutes);
router.use("/v1/list", listViewRoutes);
router.use("/v1/answer", answerRoutes);
router.use("/v1/statistics/", attemptRoutes);

// export
module.exports = router;