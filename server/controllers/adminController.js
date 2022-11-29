const { attributes } = require("../data/data");
const customerProfile = require("../models/customerProfile");
const catchAsync = require("../utils/catchAsync");

exports.customerList = catchAsync(async(req, res, next) => {
    const response = await customerProfile.findAll({
        attributes: ["customerID", "customerProfieStatus"],
    });
    res.status(200).json({
        status: "success",
        count: response.length,
        data: response,
    });
});
exports.customerDetails = catchAsync(async(req, res, next) => {
    const { customerID } = req.params;

    const response = await customerProfile.findAll({
        where: {
            customerID,
        },
        attributes,
    });

    res.status(200).json({ status: "success", data: response });
});
// ROUTES :: Stream
exports.approveList = catchAsync(async(req, res, next) => {
    const response = await customerProfile.findAll({
        where: {
            customerProfieStatus: "PENDING",
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        count: response.length,
        data: response,
    });
});
exports.approveCustomer = catchAsync(async(req, res, next) => {
    // FIXME: Get and check is altready update
    const { customerID } = req.params;
    await customerProfile.update({ customerProfieStatus: "ACTIVE" }, {
        where: {
            customerID,
        },
        attributes,
    });
    res.status(200).json({ status: "success", customerID });
});