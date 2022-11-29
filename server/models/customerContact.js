const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const customerContact = sequelize.define(
    "customerContact", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        customerProfileTenantID: {
            type: DataTypes.INTEGER,

            validate: {
                allowNull: false,
                isInt: true,
                min: 1,
                max: 999999999,
            },
        },
        customerPrimaryEmail: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                isEmail: true,
            },
        },
        customerPrimaryMobile: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                isNumeric: true,
                len: [10, 10],
            },
        },
        // NOTE:
        customerProfieStatus: {
            type: DataTypes.STRING,
        },
        customerActivatedFrom: {
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
module.exports = customerContact;