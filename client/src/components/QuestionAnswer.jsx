import React, { useState } from "react";
import { useEffect } from "react";
import DropDown from "./AnswerTypes/DropDown";

import "./QuestionAnswer.css";
import RadioButton from "./RadioButton";

const QuestionAnswer = ({ data, selectionHandler, setViewed }) => {
  useEffect(() => {
    setViewed(data.id);
  }, []);

  let boolData = ["Yes", "No"];
  let dropdownData = ["Cross Reference to Documents", "Manual", "Other"];
  let scoreData = ["0", "5", "10"];
  let questionDetails = data.id.split("-");

  return (
    <div className="question-answer">
      <div className="question-details">
        <h2>Stream - {questionDetails[0]}</h2>
        <h2>Course - {questionDetails[1] + questionDetails[2]}</h2>
        <h2>Subject - {questionDetails[3]}</h2>
        <h2>Topic - {questionDetails[4] + "-" + questionDetails[6]}</h2>
      </div>
      <div className="question">{data.question}</div>
      <div className="options">
        {data.optionsValues.map((option, index) => {
          let type = data.optionTypes[index];
          let typeData =
            type === "boolean"
              ? boolData
              : type === "dropdown"
              ? dropdownData
              : scoreData;

          let modifiedData = [];
          typeData.map((d) => {
            modifiedData.push({ value: d, label: d });
          });

          return (
            <div className="option" key={index}>
              <label>{option}</label>
              {typeData === boolData && (
                <RadioButton
                  options={boolData}
                  label={option}
                  id={data.id}
                  selectionHandler={selectionHandler}
                  defalultValue={{ value: data.answers[option] }}
                />
              )}
              {typeData !== boolData && (
                <DropDown
                  options={modifiedData}
                  selectionHandler={selectionHandler}
                  id={data.id}
                  label={option}
                  defaultValue={{
                    value: data.answers[option],
                    label: data.answers[option],
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionAnswer;
