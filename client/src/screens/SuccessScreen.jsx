import React from "react";
import { Link } from "react-router-dom";
import "./SuccessScreen.css";

const SuccessScreen = ({ content }) => {
  return (
    <div className="bg success-screen">
      <div className="main-container">
        <div className="check-container">
          <div className="check-background">
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="check-shadow"></div>
        </div>
        <div className="success">You have Successfully completed the Test</div>
        <Link to={"/streams"} className="link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};


export default SuccessScreen;
