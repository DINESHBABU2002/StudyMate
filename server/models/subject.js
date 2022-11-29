const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const subject = sequelize.define(
    "subject", {
        customerProfileTenantID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            isInt: true,
            validate: {
                min: 1,
                max: 999999999,
            },
        },

        streamStreamID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        courseCourseID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        subjectID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                len: [1, 100],
            },
        },
        subjectName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 100],
            },
        },
        subjectDescription: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 200],
            },
        },

        //NOTE: DEFAULT
        subjectStatus: {
            type: DataTypes.STRING,
            defaultValue: "ACTIVE",
        },
        subjectActivatedFrom: {
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
module.exports = subject;