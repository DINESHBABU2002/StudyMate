const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
module.exports = async(req, res, next) => {
    try {
        if (!req.cookies.jwt) {
            return next(new AppError("login to continue", 404));
        }
        req.userDetails = jwt.decode(req.cookies.jwt, process.env.JWT_SECRET);
        next();
    } catch (err) {
        return next(new AppError("jwt malfunction", 404));
    }
};