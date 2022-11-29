const {
    customerProfile,
    streams,
    course,
    subject,
    chapter,
    certificate,
} = require("../models");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// ROUTES :: Stream
exports.addStream = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { streamID, streamName, streamDescription, streamStatus } = req.body;

    const tenant = await customerProfile.findOne({ where: { tenantID } });
    if (!tenant) {
        res.status(400).json({
            status: "failed",
            message: "Tenant Not Found",
        });
    } else {
        const stream = await tenant.createStream({
            streamID,
            streamName,
            streamDescription,
            streamStatus,
        });
        res.status(200).json({ status: "success" });
    }
});
// ROUTES :: Course
exports.addCourse = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { streamID, courseID, courseName, courseDescription } = req.body;
    const stream = await streams.findOne({ where: { streamID } });
    if (!stream) {
        next(new AppError("Stream not found", 404));
    }
    const course = await stream.createCourse({
        customerProfileTenantID: tenantID,
        courseID,
        courseName,
        courseDescription,
    });
    res.status(200).json({ status: "success" });
});
// ROUTES :: SUBJECT
exports.addSubject = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { streamID, courseID, subjectID, subjectName, subjectDescription } =
    req.body;
    const Course = await course.findOne({
        where: { courseID, streamStreamID: streamID },
    });
    if (!Course) {
        next(new AppError("Course not found", 404));
    }
    const subject = await Course.createSubject({
        customerProfileTenantID: tenantID,
        streamStreamID: streamID,
        subjectID,
        subjectName,
        subjectDescription,
    });
    res.status(200).json({ status: "success" });
});
// ROUTES :: CHAPTER
exports.addChapter = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const {
        streamID,
        courseID,
        subjectID,
        chapterID,
        chapterName,
        chapterDescription,
    } = req.body;
    const Subject = await subject.findOne({
        where: {
            customerprofileTenantID: tenantID,
            streamStreamID: streamID,
            courseCourseID: courseID,
            subjectID,
        },
    });
    if (!Subject) {
        next(new AppError("subject not found", 404));
    }

    const chapter = await Subject.createChapter({
        customerProfileTenantID: tenantID,
        streamStreamID: streamID,
        courseCourseID: courseID,
        chapterID,
        chapterName,
        chapterDescription,
    });
    res.status(200).json({ status: "success" });
});
// ROUTES :: topic
exports.addTopic = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const {
        streamID,
        courseID,
        subjectID,
        chapterID,
        topicID,
        topicName,
        topicDescription,
    } = req.body;
    const Chapter = await chapter.findOne({
        where: {
            customerprofileTenantID: tenantID,
            streamStreamID: streamID,
            courseCourseID: courseID,
            subjectSubjectID: subjectID,
            chapterID,
        },
    });
    if (!Chapter) {
        next(new AppError("subject not found", 404));
    }

    const Topic = await Chapter.createTopic({
        customerProfileTenantID: tenantID,
        streamStreamID: streamID,
        courseCourseID: courseID,
        subjectSubjectID: subjectID,
        topicID,
        topicName,
        topicDescription,
    });
    res.status(200).json({ status: "success" });
});
exports.addCertificate = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const {
        streamID,
        courseID,
        subjectID,
        certificateID,
        certificateName,
        certificateDescription,
    } = req.body;
    const Course = await course.findOne({
        where: {
            courseID,
            streamStreamID: streamID,
        },
    });
    if (!Course) {
        next(new AppError("Course not found", 404));
    }
    const Certificate = await Course.createCertificate({
        customerProfileTenantID: tenantID,
        streamStreamID: streamID,
        subjectSubjectID: subjectID,
        certificateID,
        certificateName,
        certificateDescription,
    });
    res.status(200).json({ status: "success" });
});
// ROUTES :: QUESTION
exports.addQuestion = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const {
        streamID,
        courseID,
        subjectID,
        certificateID,
        questionID,
        questionName,
        questionDescription,
    } = req.body;
    const Certificate = await certificate.findOne({
        where: {
            certificateID,
        },
    });
    if (!Certificate) {
        next(new AppError("Certificate not found", 404));
    }
    const Question = await Certificate.createQuestionSet({
        customerProfileTenantID: tenantID,
        streamStreamID: streamID,
        courseCourseID: courseID,
        subjectSubjectID: subjectID,
        certificateID,
        questionID,
        questionName,
        questionDescription,
    });
    res.status(200).json({ status: "success" });
});