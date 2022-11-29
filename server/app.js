// import data section
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const models = require("./models");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const universalErrorHandler = require("./controllers/errorController");

//use Data section
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("tiny"));

//use route rection
app.use("/api", routes);
app.all("*", (req, res, next) => {
  next(new AppError("invalid route", 404));
});

//UNIVERAL ERROR HANDLING FUNCTION
app.use(universalErrorHandler);

//export Data section
module.exports = app;
