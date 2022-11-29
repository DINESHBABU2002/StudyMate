const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const userDepartment = sequelize.define(
    "userDepartment", {
        customerProfileTenantID: {
            type: DataTypes.INTEGER,

            validate: {
                allowNull: false,
                isInt: true,
                min: 1,
                max: 999999999,
            },
        },
        userDepartmentID: {
            type: DataTypes.STRING,
            primaryKey: true,
            validate: {
                allowNull: false,
                unique: true,
                len: [1, 100],
            },
        },

        userDepartmentName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: true,
                len: [1, 100],
            },
        },
        userDepartmentDescription: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 200],
            },
        },
        userDepartmentHeadID: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1, 200],
            },
        },

        //NOTE: DEFAULT
        userDepartmentStatus: {
            type: DataTypes.STRING,
        },
        userDepartmentActivatedFrom: {
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
module.exports = userDepartment;