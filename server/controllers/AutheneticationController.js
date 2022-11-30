const { userProfile, customerProfile } = require("../models");
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { attributes } = require("../data/data");

const jwtMaxTime = 3 * 24 * 60 * 60 * 1000;

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: ONE_WEEK,
  });
}

exports.testing = catchAsync(async (req, res, next) => {
  res.send("testing");
});
exports.SignupCustomer = catchAsync(async (req, res, next) => {
  const data = req.body;
  console.log(data);
  await customerProfile.create(data);
  res.status(200).json({
    status: "success",
    data,
  });
});
exports.SignupUser = catchAsync(async (req, res, next) => {
  const { tenantID, userID, userPassword, userGivenName } = req.body;

  const tenant = await customerProfile.findOne({ where: { tenantID } });
  if (!tenant) {
    return next(new AppError("No tenant Found", 404));
  }
  const user = await tenant.createUserprofile({
    userID,
    userPassword,
    userGivenName,
  });
  res.status(200).json({
    status: "success",
    tenant,
    user,
  });
});

exports.Login = catchAsync(async (req, res, next) => {
  const { userID, userPassword } = req.body;
  const user = await userProfile.findOne({
    where: {
      userID,
    },
  });
  if (!user) {
    return next(new AppError("No User Found", 403));
  }
  if (!(await user.comparePassword(userPassword))) {
    return next(new AppError("Invalid Password", 403));
  }
  const token = jwtSignUser({
    userID,
    tenantID: user.customerProfileTenantID,
    userPassword,
  });
  res.cookie("jwt", token, {
    maxAge: jwtMaxTime,
    httpOnly: true,
  });
  res.status(200).json({ status: "success", token, user: user, userID });
});
exports.me = catchAsync(async (req, res, next) => {
  const { tenantID, userID, userPassword } = req.userDetails;
  // attributes.exclude.push("userPassword");
  const user = await userProfile.findOne({
    where: { customerProfileTenantID: tenantID, userID },
    attributes,
  });
  if (!user) {
    return next(new AppError("No user Found", 404));
  }
  if (!(await user.comparePassword(userPassword))) {
    return next(new AppError("Invalid Password", 403));
  }
  console.log(user);
  res
    .status(200)
    .json({
      status: "success",
      user: { username: user.userGivenName, role: user.userRolePrimary },
    });
});

//role admin user company-admin
//role admin user company-admin
