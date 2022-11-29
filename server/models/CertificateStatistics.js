const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const certificateStatistics = sequelize.define(
    "certificateStatistics", {
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
            validate: {
                allowNull: false,
            },
        },
        streamStreamID: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            },
        },
        courseCourseID: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            },
        },

        subjectSubjectID: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            },
        },
        certificateCertificateID: {
            type: DataTypes.STRING,
            primaryKey: true,
            validate: {
                allowNull: false,
                unique: true,
            },
        },
        attempt1: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 100],
            },
        },
        attempt2: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 100],
            },
        },
        attempt3: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 100],
            },
        },
        //NOTE: DEFAULT
        attemptStatus: {
            type: DataTypes.STRING,
        },
        attemptActivatedFrom: {
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
module.exports = certificateStatistics;