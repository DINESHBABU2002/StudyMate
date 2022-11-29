const { attributes } = require("../data/data");
const {
  customerProfile,
  certificateAttempt,
  certificateStatistics,
} = require("../models");
const questionSet = require("../models/questionSet");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// ROUTES :: Stream
exports.setTestAnswer = catchAsync(async (req, res, next) => {
  const { tenantID, userID } = req.userDetails;
  const { questionID } = req.params;
  // const answer = {
  //   id: "NABH-SHCO-ENTRY-OCS-CQI-TOPIC-1-QUESTION-1",
  //   question:
  //     "There is a designated individual for coordinating and implementing the quality improvement programme.",
  //   viewed: false,
  //   optionsValues: ["Documentation", "Implementation", "Evidence", "score"],
  //   optionTypes: ["boolean", "boolean", "dropdown", "score"],
  //   answers: {
  //     Documentation: "No",
  //     Implementation: "Yes",
  //     Evidence: "Manual",
  //     score: "5",
  //   },
  // };
  const answer = req.body;
  const { Documentation, Implementation, Evidence, score } = req.body;
  const tenant = await customerProfile.findOne({
    where: { tenantID },
    attributes,
  });
  const Question = await questionSet.findOne({
    where: { questionID },
  });
  const data = {
    customerProfileTenantID: tenantID,
    userID,
    attemptNumber: 0,
    streamStreamID: Question.streamStreamID,
    courseCourseID: Question.courseCourseID,
    subjectSubjectID: Question.subjectSubjectID,
    certificateCertificateID: Question.certificateCertificateID,
    questionID,
    questionName: Question.questionName,
    questionDescription: Question.questionDescription,
    option1: Question.option1,
    answerType1: Question.answer1,
    option2: Question.option2,
    answerType2: Question.answer2,
    option3: Question.option3,
    answerType3: Question.answer3,
    option4: Question.option4,
    answerType4: Question.answer4,
    answer1: answer.answers["Documentation"],
    answer2: answer.answers["Implementation"],
    answer3: answer.answers["Evidence"],
    answer4: answer.answers["score"],
    attemptNumber: 0,
  };
  if (questionID != answer.id) {
    return next(new AppError("No tenant Found", 404));
  }
  if (data.questionName != answer.question) {
    return next(new AppError("Undefined", 404));
  }
  if (data.questionName != answer.question) {
    return next(new AppError("Undefined", 404));
  }
  if (
    answer.optionTypes[0] != data.answerType1 ||
    answer.optionTypes[1] != data.answerType2 ||
    answer.optionTypes[2] != data.answerType3 ||
    answer.optionTypes[3] != data.answerType4
  ) {
    return next(new AppError("Undefined", 404));
  }
  if (
    answer.optionsValues[0] != data.option1 ||
    answer.optionsValues[1] != data.option2 ||
    answer.optionsValues[2] != data.option3 ||
    answer.optionsValues[3] != data.option4
  ) {
    return next(new AppError("Undefined", 404));
  }
  const save = await certificateAttempt.create(data);

  // (tenant) ? next(new AppError("no tenant found", 403))
  res.status(203).json({ status: "success", save });
});
// ROUTES :: Course
exports.submitTest = catchAsync(async (req, res, next) => {
  const { tenantID } = req.userDetails;
  const { streamID } = req.params;
  //   console.log(req.body);
  const InputData = req.body;

  // InputData.map((el) => {
  //     if (data.questionName != answer.question) {
  //         return next(new AppError("Undefined", 404));
  //     }
  //     if (data.questionName != answer.question) {
  //         return next(new AppError("Undefined", 404));
  //     }
  //     if (
  //         answer.optionTypes[0] != data.answerType1 ||
  //         answer.optionTypes[1] != data.answerType2 ||
  //         answer.optionTypes[2] != data.answerType3 ||
  //         answer.optionTypes[3] != data.answerType4
  //     ) {
  //         return next(new AppError("Undefined", 404));
  //     }
  //     if (
  //         answer.optionsValues[0] != data.option1 ||
  //         answer.optionsValues[1] != data.option2 ||
  //         answer.optionsValues[2] != data.option3 ||
  //         answer.optionsValues[3] != data.option4
  //     ) {
  //         return next(new AppError("Undefined", 404));
  //     }
  // });

  // const tenant = await customerProfile.findOne({
  //     where: { tenantID },
  //     attributes,
  // });
  // const statusData = await certificateAttempt.findAll({
  //     where: {
  //         customerProfileTenantID: tenantID,
  //     },
  // });
  const data = {
    TotalScore: 0,
    yourScore: 0,
    predictedScore: 0,
  };
  InputData.map((el) => {
    data.TotalScore += 10;
    // console.log(el);
    if (el) {
      // console.log(el.answers);
      if (el.answers.Documentation == "Yes") {
        if (el.answers.Implementation == "Yes") {
          if (el.answers.Evidence != null) {
            data.yourScore += 10;
          }
          data.yourScore += 10;
        }
        data.yourScore += 5;
      }
      data.predictedScore += Number(el.answers.score);
    }
  });

  // const stats = await certificateStatistics.g();
  const date = new Date();
  res.json({
    status: "success",
    data,
  });
});
