const { attributes } = require("../data/data");
const { customerProfile, certificateAttempt } = require("../models");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// ROUTES :: Stream
exports.getStreamList = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        next(new AppError("No Tenant Found", 404));
    } else {
        const stream = await tenant.getStreams({
            where: {
                streamStatus: "ACTIVE",
            },
            attributes,
        });
        res.status(200).json({
            status: "success",
            count: stream.length,
            data: [...stream],
        });
    }
});
// ROUTES :: Course
exports.getCourseList = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { streamID } = req.params;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const course = await tenant.getCourses({
        where: {
            courseStatus: "ACTIVE",
            streamStreamID: streamID,
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        count: course.length,
        data: [...course],
    });
});
// ROUTES :: SUBJECT

exports.getSubjectList = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { streamID, courseID } = req.params;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const subject = await tenant.getSubjects({
        where: {
            subjectStatus: "ACTIVE",
            courseCourseID: courseID,
            streamStreamID: streamID,
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        count: subject.length,
        data: [...subject],
    });
});

// ROUTES :: CHAPTER
exports.getChapterList = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { streamID, courseID, subjectID } = req.params;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const Chapter = await tenant.getChapters({
        where: {
            chapterStatus: "ACTIVE",
            courseCourseID: courseID,
            streamStreamID: streamID,
            subjectSubjectID: subjectID,
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        count: Chapter.length,
        data: [...Chapter],
    });
});

//ROUTES :: TOPIC

exports.getTopicList = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { streamID, courseID, subjectID, chapterID } = req.params;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const Topic = await tenant.getTopics({
        where: {
            topicStatus: "ACTIVE",
            courseCourseID: courseID,
            streamStreamID: streamID,
            subjectSubjectID: subjectID,
            chapterChapterID: chapterID,
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        count: Topic.length,
        data: [...Topic],
    });
});
// ROUTES :: QUESTION
exports.getQuestionList = catchAsync(async(req, res, next) => {
    console.log(req);
    const { tenantID } = req.userDetails;

    const { streamID, courseID, subjectID } = req.params;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const QuestionSet = await tenant.getQuestionSets({
        where: {
            questionStatus: "ACTIVE",
            courseCourseID: courseID,
            streamStreamID: streamID,
            subjectSubjectID: subjectID,
        },
        attributes,
    });

    res.status(200).json({
        status: "success",
        count: QuestionSet.length,
        data: [...QuestionSet],
    });
});