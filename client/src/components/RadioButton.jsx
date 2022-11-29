import React from "react";
import { useState } from "react";
import "./RadioButton.css";

const RadioButton = ({
  options,
  label,
  id,
  selectionHandler,
  defalultValue,
}) => {
  const [checked, setChecked] = useState(defalultValue.value);

  const changeHandler = (option) => {
    let value1 = { label: option, value: option };
    selectionHandler(value1, id, label);
  };

  return (
    <div className="radio-container">
      {options.map((option) => {
        return (
          <div
            key={option}
            onClick={() => {
              setChecked(option);
              changeHandler(option);
            }}
          >
            <input
              type={"radio"}
              value={option}
              name={label}
              checked={option === checked}
              onChange={(e) => {
                setChecked(option);
                changeHandler(e.target.value, option);
              }}
            />
            <label> {option}</label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButton;
