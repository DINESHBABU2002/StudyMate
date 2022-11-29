const { attributes } = require("../data/data");
const { customerProfile, chapter } = require("../models");
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
exports.getStream = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { streamID } = req.params;
    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        next(new AppError("No Tenant Found", 404));
    } else {
        const stream = await tenant.getStreams({
            where: {
                streamID,
                streamStatus: "ACTIVE",
            },
            attributes,
        });
        if (stream.length == 0) {
            return next(new AppError("Invalid Stream ID", 400));
        }
        res.status(200).json({
            status: "success",

            data: stream[0],
        });
    }
});

// ROUTES :: Course
exports.getCourseList = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;

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
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        count: course.length,
        data: [...course],
    });
});
exports.getCourse = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { courseID } = req.params;
    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        next(new AppError("No Tenant Found", 404));
    } else {
        const course = await tenant.getCourses({
            where: {
                courseID,
                courseStatus: "ACTIVE",
            },
            attributes,
        });
        if (course.length == 0) {
            return next(new AppError("Invalid Course ID", 400));
        }
        res.status(200).json({
            status: "success",

            data: course[0],
        });
    }
});

// ROUTES :: SUBJECT

exports.getSubject = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { subjectID } = req.params;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const subject = await tenant.getSubjects({
        where: {
            subjectID,
            subjectStatus: "ACTIVE",
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        data: subject[0],
    });
});
exports.getSubjectList = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;

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

exports.getChapter = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { chapterID } = req.params;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const Chapter = await tenant.getChapters({
        where: {
            chapterID,
            chapterStatus: "ACTIVE",
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        data: Chapter[0],
    });
});
exports.getChapterList = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;

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
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        count: Topic.length,
        data: [...Topic],
    });
});
exports.getTopic = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { topicID } = req.params;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const Topic = await tenant.getTopics({
        where: {
            topicID,
            topicStatus: "ACTIVE",
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        data: Topic[0],
    });
});

// ROUTES :: CERTIFICATE
exports.getCertificate = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { certificateID } = req.params;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const Topic = await tenant.getCertificates({
        where: {
            certificateID,
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        data: Topic[0],
    });
});
exports.getCertificateList = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const Topic = await tenant.getCertificates({
        where: {
            certificateStatus: "ACTIVE",
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
exports.getQuestion = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;
    const { QuestionID } = req.params;

    const tenant = await customerProfile.findOne({
        where: { tenantID },
        attributes,
    });
    if (!tenant) {
        return next(new AppError("No Tenant Found", 404));
    }
    const QuestionSet = await tenant.getQuestionSets({
        where: {
            QuestionID,
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        data: QuestionSet[0],
    });
});
exports.getQuestionList = catchAsync(async(req, res, next) => {
    const { tenantID } = req.userDetails;

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
        },
        attributes,
    });
    res.status(200).json({
        status: "success",
        count: QuestionSet.length,
        data: [...QuestionSet],
    });
});