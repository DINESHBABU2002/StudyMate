const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const topic = sequelize.define(
    "topic", {
        customerProfileTenantID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                min: 1,
                max: 999999999,
            },
        },
        streamStreamID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        courseCourseID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        subjectSubjectID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        chapterChapterID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        topicID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 100],
            },
        },
        topicName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        topicDescription: {
            type: DataTypes.STRING,
            validate: {},
        },

        //NOTE: DEFAULT
        topicStatus: {
            type: DataTypes.STRING,
            defaultValue: "ACTIVE",
        },
        topicActivatedFrom: {
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
module.exports = topic;