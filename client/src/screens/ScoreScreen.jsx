import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ScoreScreen.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const ScoreScreen = () => {
  let percentage = 50;

  let date = formatDistanceToNow(new Date(), {
    addSuffix: true,
  });

  return (
    <div>
      <div className="heading-container">
        <h1>List of Scores</h1>
      </div>
      <div className="progress-bar-container">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          className="progress-bar"
        />
        <div>
          <p className="couse-values">
            <strong className="course-sub-title">Course Name : </strong>
            Web Technology
          </p>
          <p className="couse-values">
            <strong className="course-sub-title">Attended Time : </strong>
            {date}
          </p>
          <p className="couse-values">
            <strong className="course-sub-title">Score : </strong>
            140
          </p>
          <p>View Certificate</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreScreen;
