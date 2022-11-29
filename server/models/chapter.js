const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const chapter = sequelize.define(
    "chapter", {
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
        courseCourseID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        subjectSubjectID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        chapterID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 100],
            },
        },
        chapterName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100],
            },
        },
        chapterDescription: {
            type: DataTypes.STRING(2000),
            validate: {
                len: [0, 2000],
            },
        },

        //NOTE: DEFAULT
        chapterStatus: {
            type: DataTypes.STRING,
            defaultValue: "ACTIVE",
        },
        chapterActivatedFrom: {
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
module.exports = chapter;