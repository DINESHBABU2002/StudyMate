const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const userContact = sequelize.define(
    "userContact", {
        customerProfileTenantID: {
            type: DataTypes.INTEGER,

            validate: {
                allowNull: false,
                isInt: true,
                min: 1,
                max: 999999999,
            },
        },
        userprofileUserID: {
            type: DataTypes.STRING,
            primaryKey: true,
            validate: {
                allowNull: false,
                unique: true,
            },
        },
        userPrimaryEmail: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                isEmail: true,
                len: [1, 100],
            },
        },
        userPrimaryMobile: {
            type: DataTypes.STRING,
            validate: {
                isNumeric: true,
                allowNull: false,
                len: [10, 10],
            },
        },
        // NOTE: default
        userProfieStatus: {
            type: DataTypes.STRING,
        },
        userActivatedFrom: {
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
module.exports = userContact;