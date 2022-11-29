const { attributes } = require("../data/data");
const { certificateAttempt } = require("../models");
const customerProfile = require("../models/customerProfile");
const catchAsync = require("../utils/catchAsync");

exports.attemptStats = catchAsync(async(req, res, next) => {
    const { tenantID, userID } = req.userDetails;
    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    const stats = await certificateAttempt.findAll({
        where: {
            customerProfileTenantID: tenantID,
        },
    });

    res.status(200).json({
        status: "success",
        count: stats.length,
        data: stats,
    });
});