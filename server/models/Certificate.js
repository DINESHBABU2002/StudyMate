const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const cetificate = sequelize.define(
    "certificate", {
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
            validate: {},
        },

        subjectSubjectID: {
            type: DataTypes.STRING,
            validate: {},
        },
        certificateID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true,
            validate: {},
        },
        certificateName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100],
            },
        },
        certificateDescription: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 200],
            },
        },
        //NOTE: DEFAULT
        certificateStatus: {
            type: DataTypes.STRING,
            defaultValue: "ACTIVE",
        },
        certificateActivatedFrom: {
            type: DataTypes.DATEONLY,
            validate: {
                isDate: true,
            },
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

module.exports = cetificate;