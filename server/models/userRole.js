const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const userRole = sequelize.define(
  "userRole",
  {
    customerProfileTenantID: {
      type: DataTypes.INTEGER,

      allowNull: false,
      validate: {
        isInt: true,
        min: 1,
        max: 999999999,
      },
    },
    userRoleID: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        allowNull: false,
        unique: true,
        len: [0, 100],
      },
    },
    userRoleName: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [0, 100],
      },
    },
    userRoleDescription: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 200],
      },
    },

    //NOTE: DEFAULT
    userRoleStatus: {
      type: DataTypes.STRING,
    },
    userRoleActivatedFrom: {
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
  },
  {
    timestamps: false,
  }
);
module.exports = userRole;
