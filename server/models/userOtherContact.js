const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const userOtherContact = sequelize.define(
    "userOtherContact", {
        customerProfileTenantID: {
            type: DataTypes.INTEGER,

            validate: {
                allowNull: false,
                isInt: true,
                min: 1,
                max: 999999999,
            },
        },
        userContactUserID: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1, 100],
            },
        },
        contactPlaceholder: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            },
        },
        contactValue: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            },
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            validate: {
                BOOLEAN: true,
                allowNull: false,
            },
        },
        //NOTE: DEFAULT
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
module.exports = userOtherContact;