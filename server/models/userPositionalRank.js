const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const userPositionalRank = sequelize.define(
    "userPositionalRank", {
        customerProfileTenantID: {
            type: DataTypes.INTEGER,

            validate: {
                allowNull: false,
                isInt: true,
                min: 1,
                max: 999999999,
            },
        },
        PositionalRankID: {
            type: DataTypes.STRING,
            primaryKey: true,
            validate: {
                allowNull: false,
                unique: true,
                len: [1, 100],
            },
        },
        PositionalRankName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: true,
                len: [1, 100],
            },
        },
        PositionalRankDescription: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 200],
            },
        },
        PositionalRankHeadUserID: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1, 100],
            },
        },

        //NOTE: DEFAULT
        PositionalRankStatus: {
            type: DataTypes.STRING,
        },
        PositionalRankActivatedFrom: {
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
module.exports = userPositionalRank;