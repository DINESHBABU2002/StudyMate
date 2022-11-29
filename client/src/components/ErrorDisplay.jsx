import React from "react";

import "./ErrorDisplay.css";

const ErrorDisplay = ({ message }) => {
  return (
    <div className="error-message-screen">
      <h1 className="error-heading">OOPS</h1>
      <h1 className="message">{message}</h1>
    </div>
  );
};

export default ErrorDisplay;
