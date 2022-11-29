import React from "react";
import "./ButtonPrimary.css";

const ButtonPrimary = (props) => {
  return (
    <button
      className={`button-primary ${props.disabled ? "disabled" : ""}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
