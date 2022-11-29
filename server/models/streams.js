const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const streams = sequelize.define(
    "streams", {
        customerProfileTenantID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                min: 1,
                max: 999999999,
            },
        },
        streamID: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,
            allowNull: false,
            validate: {
                len: [0, 200],
            },
        },
        streamName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 200],
            },
        },
        streamDescription: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 500],
            },
        },

        //NOTE: DEFAULT
        streamStatus: {
            type: DataTypes.STRING,
            defaultValue: "ACTIVE",
        },
        streamActivatedFrom: {
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
module.exports = streams;