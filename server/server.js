//loding ENVIRONMENT VARIABLES
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
    console.log("unhandled Caaught Exception --> SHUTTING DOWN");
    console.log(err.name, err.message);
    process.exit(1);
});
const app = require("./app");

const sequelize = require("./database");
sequelize.sync().then(() => {
    console.log("db start");
});

const server = app.listen(process.env.PORT || 3000);
console.log(`server started on port ${process.env.PORT}`);
process.on("unhandledRejection", (err) => {
    console.log("unhandled Handled Rejection --> SHUTTING DOWN");

    console.log(err);
    server.close(() => process.exit(1));
});