const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const cetificateAttempt = sequelize.define(
    "certificateAttempt", {
        customerProfileTenantID: {
            type: DataTypes.INTEGER,

            allowNull: false,
            validate: {
                isInt: true,

                min: 1,
                max: 999999999,
            },
        },
        userID: {
            type: DataTypes.STRING,
            validate: {},
        },
        attemptNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
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
        },

        questionID: {
            type: DataTypes.STRING,
            allowNull: false,
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
        attemptStatus: {
            type: DataTypes.STRING,
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
module.exports = cetificateAttempt;