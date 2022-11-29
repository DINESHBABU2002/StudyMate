const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const customerProfile = sequelize.define(
    "customerProfile", {
        tenantID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            // defaultValue: 8,
            validate: {
                min: 1,
                max: 999999999,
            },
        },
        customerID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        CustomerLevel: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        levelActivateFrom: {
            type: DataTypes.DATEONLY,
        },
        levelActivateTo: {
            type: DataTypes.DATEONLY,
        },
        customerAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        customerState: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        customerCountry: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        customerPostalcode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        customerProfieStatus: {
            type: DataTypes.STRING,
            defaultValue: "PENDING",
            allowNull: false,
            validate: {},
        },
        customerActivatedFrom: {
            type: DataTypes.DATEONLY,
        },
        createdByUserID: {
            type: DataTypes.STRING,
            validate: {
                // allowNull: false,
            },
        },
        createdTimeUTC: {
            type: DataTypes.TIME,
            validate: {
                // allowNull: false,
            },
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
module.exports = customerProfile;