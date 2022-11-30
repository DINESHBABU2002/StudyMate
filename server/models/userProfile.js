const { DataTypes } = require("sequelize");
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));

const sequelize = require("../database");

function hashPassword(user, options) {
  const SALT_FACTOR = 8;
  if (!user.changed("userPassword")) {
    console.log("return");
    return;
  }
  console.log("catch");
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then((salt) => bcrypt.hashAsync(user.userPassword, salt, null))
    .then((hash) => {
      console.log(hash);
      user.setDataValue("userPassword", hash);
    });
}
const userProfile = sequelize.define(
  "userprofile",
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
    userID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 100],
      },
    },
    userPassword: {
      type: DataTypes.STRING,
    },
    userGivenName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },
    userDepartmentPrimary: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },
    userDepartmentSecondary: {
      type: DataTypes.STRING,
      validate: { len: [1, 100] },
    },
    userDepartmentTertiary: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },
    userRolePrimary: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
      defaultValue: "student",
    },
    userRoleSecondary: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },
    userRoleTertiary: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },
    userPositionalRankID: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },

    // FIXME: experiance

    //NOTE: Default
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
  },
  {
    timestamps: false,
    hooks: {
      // beforeCreate: hashPassword,
      // beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    },
  }
);
userProfile.prototype.comparePassword = async function (pass) {
  console.log(await bcrypt.compareAsync(pass, this.userPassword));
  return bcrypt.compareAsync(pass, this.userPassword);
};

module.exports = userProfile;
