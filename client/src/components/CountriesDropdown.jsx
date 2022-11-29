import React from "react";
import { useState } from "react";
import Select from "react-select";

import "./CountriesDropdown.css";

const CountriesDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("eng-ind");

  const countries = [
    { value: "eng-ind", label: "ENG - IND" },
    { value: "hin-ind", label: "HIN - IND" },
    { value: "arb-uae", label: "ARB - UAE" },
    { value: "eng-aus", label: "ENG - AUS" },
  ];

  const changeHandler = (e) => {
    setSelectedCountry(e.value);
  };

  return (
    <div className="select-container">
      <Select
        options={countries}
        defaultValue={countries[0]}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};

export default CountriesDropdown;
