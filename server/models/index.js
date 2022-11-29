// const customerContact = require("./customerContact");
// const customerOtherContact = require("./customerOtherContact");
const customerProfile = require("./customerProfile");
const userProfile = require("./userProfile");
// const userContact = require("./userContact");
// const userOtherContact = require("./userOtherContact");
// const userRole = require("./userRole");
// const userDepartment = require("./userDepartment");
// const userPositionalRank = require("./userPositionalRank");
const streams = require("./streams");
const course = require("./course");
const subject = require("./subject");
const chapter = require("./chapter");
const topic = require("./topic");
const certificate = require("./Certificate");
const questionSet = require("./questionSet");
const certificateStatistics = require("./CertificateStatistics");
const certificateAttempt = require("./CertificateAttempt");
// const countryTable = require("./countryTable");
// Associations

// // CUSTOMER PROFILE (tenantID) --> CUSTOMER CONTACT (tenantID) ONE-ONE
// customerProfile.hasOne(customerContact);
// customerContact.belongsTo(customerProfile);

// // CUSTOMER PROFILE (tenantID) --> CUSTOMER OTHER CONTACT (tenantID) ONE-MANY
// customerProfile.hasMany(customerOtherContact);
// customerOtherContact.belongsTo(customerProfile);

// // CUSTOMER CONTACT (tenantID) -> CUSTOMER OTHER CONTACT (tenantID) ONE-MANY
// customerContact.hasMany(customerOtherContact);
// customerOtherContact.belongsTo(customerContact);

// CUSTOMER PROFILE (tenantID) --> USER PROFILE (tenantID) ONE-MANY

customerProfile.hasMany(userProfile);
userProfile.belongsTo(customerProfile);

// // USER PROFILE (userID) --> USER CONTACT (userID) ONE-ONE

// userProfile.hasOne(userContact);
// userContact.belongsTo(userProfile);

// // USER PROFILE (userID) --> USER OTHER CONTACTS (userID) ONE-MANY

// userProfile.hasMany(userOtherContact);
// userOtherContact.belongsTo(userProfile);

// // USER CONTACT (id) --> USER OTHER CONTACT (id) ONE-MANY

// userContact.hasMany(userOtherContact);
// userOtherContact.belongsTo(userContact);

// // CUSTOMER PROFILE (tenantID) --> USER CONTACT (tenantID) ONE-MANY

// customerProfile.hasMany(userContact);
// userContact.belongsTo(customerProfile);

// // CUSTOMER PROFILE (tenantID) --> USER OTHER CONTACT (tenantID) ONE-MANY

// customerProfile.hasMany(userOtherContact);
// userOtherContact.belongsTo(customerProfile);

// // CUSTOMER PROFILE (tenantID) --> USER DEPARTMENT ONE-MANY
// customerProfile.hasMany(userDepartment);
// userDepartment.belongsTo(customerProfile);

// // USER DEPARTMENT (deartmentID) --> USER PROFILE ONE-MANY

// userDepartment.hasMany(userProfile);
// userProfile.belongsTo(userDepartment);

// // USER PROFILE (departmentHeadID) --> USER DEPARTMENT ONE-ONE

// userProfile.hasOne(userDepartment, { foreignKey: "userDeprtmentHeadID" });
// userDepartment.belongsTo(userProfile, { foreignKey: "userDeprtmentHeadID" });

// // CUSTOMER PROFILE (tenantID) --> USER ROLE (tenantID) ONE-MANY

// customerProfile.hasMany(userRole);
// userRole.belongsTo(customerProfile);

// // USER ROLE (roleID) --> USER PROFILE ONE-MANY #ROLEONE

// userRole.hasMany(userProfile, { foreignKey: "roleOne" }); //FIXME:
// userProfile.belongsTo(userRole, { foreignKey: "roleOne" });

// // USER ROLE (roleID) --> USER PROFILE ONE-MANY #ROLETWO

// userRole.hasMany(userProfile, { foreignKey: "roleTwo" }); //FIXME:
// userProfile.belongsTo(userRole, { foreignKey: "roleTwo" });

// // USER ROLE (roleID) --> USER PROFILE ONE-MANY #ROLETHREE

// userRole.hasMany(userProfile, { foreignKey: "roleThree" }); //FIXME:
// userProfile.belongsTo(userRole, { foreignKey: "roleThree" });

// // CUSTOMER PROFILE (tenantID) --> USER POSITIONAL RANK ONE-MANY

// customerProfile.hasMany(userPositionalRank);
// userPositionalRank.belongsTo(customerProfile);

// // USER POSITIONAL RANK (positionalRankID) --> USER PROFILE ONE-MANY

// userPositionalRank.hasMany(userProfile);
// userProfile.belongsTo(userPositionalRank);

// // CUSTOMER PROFILE (tenantID) --> STREAMS (tenantID) ONE-MANY

customerProfile.hasMany(streams);
streams.belongsTo(customerProfile);

//FIXME: -->question,attempt,certificate,statistics

// CUSTOMER PROFILE (tenantID) -->COURSE (tenantID) ONE-MANY

customerProfile.hasMany(course);
course.belongsTo(customerProfile);

// // STREAMS (streamID) --> COURSE (streamID) ONE-MANY

streams.hasMany(course);
course.belongsTo(streams);

// //FIXME: -->question,attempt,certificate,statistics

// //CUSTOMER PROFILE (tenantID) --> SUBJECT (tenantID)

customerProfile.hasMany(subject);
subject.belongsTo(customerProfile);

// // STREAMS (streamID) --> SUBJECT (streamID) ONE-MANY

// streams.hasMany(subject);
// subject.belongsTo(streams);

// // COURSE (courseID) --> SUBJECT (streamID) ONE-MANY

course.hasMany(subject);
subject.belongsTo(course);

// //FIXME: -->question,attempt,certificate,statistics

// // CUSTOMER PROFILE (tenantID) --> CHAPTER (tenantID) ONE-MANY

customerProfile.hasMany(chapter);
chapter.belongsTo(customerProfile);

// // STREAMS (streamID) --> CHAPTER (streamID) ONE-MANY

streams.hasMany(chapter);
chapter.belongsTo(streams);

// // COURSE (courseID) --> SUBJECT (streamID) ONE-MANY

course.hasMany(chapter);
chapter.belongsTo(course);

// // SUBJECT (subjectID) --> CHAPTER ONE-MANY

subject.hasMany(chapter);
chapter.belongsTo(subject);

// //FIXME: -->question,attempt,certificate,statistics

// // CUSTOMER PROFILE (tenantID) --> TOPIC (tenantID) ONE-MANY

customerProfile.hasMany(topic);
topic.belongsTo(customerProfile);

// // STREAMS (streamID) --> TOPIC (streamID) ONE-MANY

streams.hasMany(topic);
topic.belongsTo(streams);

// // COURSE (courseID) --> TOPIC (streamID) ONE-MANY

course.hasMany(topic);
topic.belongsTo(course);

// // SUBJECT (subjectID) --> TOPIC ONE-MANY

subject.hasMany(topic);
topic.belongsTo(subject);

// // CHAPTER (chapterID) --> TOPIC ONE-MANY

chapter.hasMany(topic);
topic.belongsTo(chapter);

// // CUSTOMER PROFILE (tenantID) --> CERTIFICATE (tenantID) ONE-MANY

customerProfile.hasMany(certificate);
certificate.belongsTo(customerProfile);

// // STREAMS (streamID) --> CERTIFICATE (streamID) ONE-MANY

streams.hasMany(certificate);
certificate.belongsTo(streams);

// // COURSE (courseID) --> CERTIFICATE (courseID) ONE-MANY

course.hasMany(certificate);
certificate.belongsTo(course);

// // SUBJECT (subjectID) --> CERTIFICATE ONE-MANY

subject.hasMany(certificate);
certificate.belongsTo(subject);

// // CUSTOMER PROFILE (tenantID) --> QUESTION SET (tenantID) ONE-MANY

customerProfile.hasMany(questionSet);
questionSet.belongsTo(customerProfile);

// // STREAMS (streamID) --> QUESTION SET (streamID) ONE-MANY

streams.hasMany(questionSet);
questionSet.belongsTo(streams);

// // COURSE (courseID) --> QUESTION SET (courseID) ONE-MANY

course.hasMany(questionSet);
questionSet.belongsTo(course);

// // SUBJECT (subjectID) --> QUESTION SET ONE-MANY

subject.hasMany(questionSet);
questionSet.belongsTo(subject);

// // CERTIFICATE (certificateID) --> QUESTION SET ONE-MANY

certificate.hasMany(questionSet);
questionSet.belongsTo(certificate);

// // NOTE: CERTIFICATE STATISTICS TABLE

// // CUSTOMER PROFILE (tenantID) --> CERTIFICATE STATISTICS (tenantID) ONE-MANY

customerProfile.hasMany(certificateStatistics);
certificateStatistics.belongsTo(customerProfile);

// // STREAMS (streamID) --> CERTIFICATE STATISTICS (streamID) ONE-MANY

streams.hasMany(certificateStatistics);
certificateStatistics.belongsTo(streams);

// // COURSE (courseID) --> CERTIFICATE STATISTICS (courseID) ONE-MANY

course.hasMany(certificateStatistics);
certificateStatistics.belongsTo(course);

// // SUBJECT (subjectID) --> CERTIFICATE STATISTICS ONE-MANY

subject.hasMany(certificateStatistics);
certificateStatistics.belongsTo(subject);

// // CERTIFICATE (certificateID) --> CERTIFICATE STATISTICS ONE-MANY

certificate.hasMany(certificateStatistics);
certificateStatistics.belongsTo(certificate);

// // NOTE: CERTIFICATE ATTEMPT TABLE

// CUSTOMER PROFILE (tenantID) --> CERTIFICATE ATTEMPT (tenantID) ONE-MANY

customerProfile.hasMany(certificateAttempt);
certificateAttempt.belongsTo(customerProfile);

// STREAMS (streamID) --> CERTIFICATE ATTEMPT (streamID) ONE-MANY

streams.hasMany(certificateAttempt);
certificateAttempt.belongsTo(streams);

// COURSE (courseID) --> CERTIFICATE ATTEMPT (courseID) ONE-MANY

course.hasMany(certificateAttempt);
certificateAttempt.belongsTo(course);

// SUBJECT (subjectID) --> CERTIFICATE ATTEMPT ONE-MANY

subject.hasMany(certificateAttempt);
certificateAttempt.belongsTo(subject);

// CERTIFICATE (certificateID) --> CERTIFICATE ATTEMPT ONE-MANY

certificate.hasMany(certificateAttempt);
certificateAttempt.belongsTo(certificate);

module.exports = {
    // customerContact,
    // customerOtherContact,
    customerProfile,
    userProfile,
    // userContact,
    // userOtherContact,
    // userRole,
    // userDepartment,
    // userPositionalRank,
    streams,
    course,
    subject,
    chapter,
    topic,
    certificate,
    // questionSet,
    certificateStatistics,
    certificateAttempt,
    // countryTable,
};