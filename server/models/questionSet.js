const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const questionSet = sequelize.define(
    "questionSet", {
        customerProfileTenantID: {
            type: DataTypes.INTEGER,

            allowNull: false,
            validate: {
                isInt: true,
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
        certificateCertificateID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        questionID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true,
            validate: {},
        },
        questionName: {
            type: DataTypes.STRING,
            validate: {},
        },
        questionDescription: {
            type: DataTypes.STRING,
            validate: {},
        },
        option1: {
            type: DataTypes.STRING,
            validate: {},
        },
        answer1: {
            type: DataTypes.STRING,
            validate: {},
        },
        option2: {
            type: DataTypes.STRING,
            validate: {},
        },
        answer2: {
            type: DataTypes.STRING,
            validate: {},
        },
        option3: {
            type: DataTypes.STRING,
            validate: {},
        },
        answer3: {
            type: DataTypes.STRING,
            validate: {},
        },
        option4: {
            type: DataTypes.STRING,
            validate: {},
        },
        answer4: {
            type: DataTypes.STRING,
            validate: {},
        },

        //NOTE: DEFAULT
        questionStatus: {
            type: DataTypes.STRING,
            defaultValue: "ACTIVE",
        },
        questionActivatedFrom: {
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
module.exports = questionSet;