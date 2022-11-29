const { DataTypes } = require("sequelize");

const sequelize = require("../database");

const countryTable = sequelize.define(
    "countryTable", {
        countryName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            },
        },
        stdCode: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            },
        },
        iso2Code: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            },
        },
        iso3Code: {
            type: DataTypes.STRING,
            primaryKey: true,
            validate: {
                allowNull: false,
                unique: true,
            },
        },
        utcOffSet: {
            type: DataTypes.TIME,
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
module.exports = countryTable;