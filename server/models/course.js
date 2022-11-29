const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const course = sequelize.define(
    "course", {
        customerProfileTenantID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                min: 1,
                max: 999999999,
            },
        },
        streamStreamID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        courseID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                len: [1, 100],
            },
        },
        courseName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100],
            },
        },
        courseDescription: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 100],
            },
        },

        //NOTE: DEFAULT
        courseStatus: {
            type: DataTypes.STRING,
            defaultValue: "ACTIVE",
        },
        courseActivatedFrom: {
            type: DataTypes.DATEONLY,
        },
        createdByUserID: {
            type: DataTypes.STRING,
        },
        createdTimeUTC: {
            type: DataTypes.TIME,
        },
        updatedByUserID: {
            type: DataTypes.STRING,
        },
        updatedTimeUTC: {
            type: DataTypes.TIME,
        },
        deletedByUserID: {
            type: DataTypes.STRING,
        },
        deletedTimeUTC: {
            type: DataTypes.TIME,
        },
    }, {
        timestamps: false,
    }
);
module.exports = course;