import React from "react";
import Select from "react-select";
import "./DropDown.css";
const DropDown = ({ id, options, selectionHandler, label, defaultValue }) => {
  return (
    <Select
      options={options}
      className="select-list"
      onChange={(e) => selectionHandler(e, id, label)}
      defaultValue={defaultValue}
    />
  );
};

export default DropDown;
