import React, { useState, useLayoutEffect } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import QuestionAnswer from "../components/QuestionAnswer";
import Loading from "./Loading";
import "./TestScreen.css";

const TakeTest = () => {
  const { courseId, streamId, subjectId } = useParams();

  const [questionNumbersSideBar, setQuestionNumbersSideBar] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [noOfQuestions, setNoOfQuestions] = useState(questions.length);
  const [noOfQuestionsViewed, setNoOfQuestionsViewed] = useState(0);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `/api/v1/list/questions/${streamId}/${courseId}/${subjectId}`
      );

      const json = await response.json();
      console.log("Question JSON :: ", json.data);
      let datas = [];

      json.data.map((data, index) => {
        let answers = {};
        answers[data.option1] = null;
        answers[data.option2] = null;
        answers[data.option3] = null;
        answers[data.option4] = null;

        datas.push({
          id: data.questionID,
          question: data.questionName,
          viewed: false,
          optionsValues: [
            data.option1,
            data.option2,
            data.option3,
            data.option4,
          ],
          optionTypes: ["boolean", "boolean", "boolean", "boolean"],
          answers,
        });
      });

      setQuestions(datas);
      setNoOfQuestions(datas.length);
      setLoading(false);
    };

    fetchData();
  }, [courseId, streamId, subjectId]);

  useEffect(() => {
    const sendData = async (data) => {
      const response = await fetch(`/api/v1/answer/${data.id}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      console.log(json);
    };
    console.log("sending to server", questions[selectedQuestion - 2]);

    sendData(questions[selectedQuestion - 2]);
  }, [selectedQuestion]);

  const handlePrev = () => {
    if (selectedQuestion <= 1) {
      return;
    }

    setSelectedQuestion(selectedQuestion - 1);
  };

  const handleNext = (e) => {
    if (selectedQuestion >= questions.length) {
      return;
    }

    setSelectedQuestion(selectedQuestion + 1);
  };

  const setViewed = (id) => {
    let questionsCopy = questions;
    questionsCopy.map((data) => {
      if (data.id === id) {
        data.viewed = true;
      }
    });
    setQuestions(questionsCopy);
    setNoOfQuestionsViewed(noOfQuestionsViewed + 1);
  };

  const selectionHandler = (e, id, label) => {
    console.log(e, id, label);
    let questionsCopy = questions;
    questionsCopy.map((data) => {
      if (data.id === id) {
        data.answers[label] = e.value;
      }
    });
    setQuestions(questionsCopy);
    console.log(questions);
  };

  const submitHandler = async () => {
    console.log("test submitted", questions);
    setLoading(true);
    const response = await fetch("/api/v1/answer/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(questions),
    });

    const json = await response.json();
    console.log(json);

    if (json.status === "success") {
      setLoading(false);
      navigate("/completed", { message: "Test Completed Successfully!" });
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (questions.length <= 0) {
    return <Loading />;
  }

  return (
    <div className="test-screen">
      <div>
        <div className="question-section">
          <QuestionAnswer
            data={questions[selectedQuestion - 1]}
            key={selectedQuestion}
            selectionHandler={selectionHandler}
            setViewed={setViewed}
          />
        </div>
        <div className="bottom-buttons-wrapper">
          <div className="bottom-buttons">
            <ButtonPrimary style={{ width: "100px" }} onClick={handlePrev}>
              Prev
            </ButtonPrimary>
            <ButtonPrimary style={{ width: "100px" }} onClick={handleNext}>
              Next
            </ButtonPrimary>
          </div>
        </div>
      </div>
      <div className="right-sidebar-wrapper">
        <div className="rightsidebar-icon-container">
          {questionNumbersSideBar && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="right-sidebar-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}

          {!questionNumbersSideBar && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="right-sidebar-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          )}
        </div>
        <div
          className={`qustion-number-wrapper ${
            !questionNumbersSideBar ? "close-side-bar" : ""
          }`}
        >
          <div className="question-options">
            {questions.map((question, index) => {
              return (
                <div
                  className={`question-wrapper ${
                    question.viewed && "viewed-question-number"
                  }  ${
                    index + 1 === selectedQuestion
                      ? "active-question-number"
                      : ""
                  } ${question.answered && "answered-question-number"}`}
                  key={index}
                  onClick={() => setSelectedQuestion(index + 1)}
                >
                  <div className="question-no">{index + 1}</div>
                </div>
              );
            })}
          </div>
          <div className="question-informations">
            <div className="question-info-flex">
              <p className="questions-info-text">No of Questions</p>
              <p className="questions-info-text">: {noOfQuestions}</p>
            </div>
            {/* <div className="question-info-flex">
              <p className="questions-info-text">No of Questions Viewed</p>
              <p className="questions-info-text">: {noOfQuestionsViewed}</p>
            </div> */}
            {/* <div className="question-info-flex margin-btm">
              <p className="questions-info-text">No of Questions Answered</p>
              <p className="questions-info-text">: {"1"}</p>
            </div> */}
            <ButtonPrimary onClick={submitHandler}>Submit</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeTest;
