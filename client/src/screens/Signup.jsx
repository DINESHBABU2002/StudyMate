import React, { useState } from "react";
import "./LoginScreen.css";

import ButtonPrimary from "../components/ButtonPrimary";
import CountriesDropdown from "../components/CountriesDropdown";

import DoctorImage from "../assets/undraw_doctors_hwty.svg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordView, setPasswordView] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });

  const navigate = useNavigate();

  const signup = async (email, password) => {
    const response = await fetch("api/v1/signup/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tenantID: 1,
        userID: email,
        userPassword: password,
        userGivenName: email,
      }),
    });

    const json = await response.json();
    if (!response.ok) {
      setError({ error: true, message: json.message });
    }

    if (response.ok) {
      navigate("/streams");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password || !userData.confirmPassword) {
      setError({ error: true, message: "Please Fill All the Fields" });
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      setError({ error: true, message: "Password does not match" });
      return;
    }

    setDisabled(true);

    signup(userData.email, userData.password);
    console.log("form submitted");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    if (error) {
      setError({ error: false, message: "" });
    }
    if (disabled) {
      setDisabled(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page-left">
        <CountriesDropdown />

        <h1 className="left-title">Sign up.</h1>
        {error.error && (
          <div className="input-field-error">
            <p>{error.message}</p>
          </div>
        )}
        <form onSubmit={submitHandler} className="form">
          <div className="login-input-container">
            <label htmlFor="email" className="form-label">
              Enter your name
            </label>
            <div>
              <input
                placeholder="Enter your name"
                className="login-input"
                type="text"
                name="email"
                value={userData.email}
                onChange={(e) => changeHandler(e)}
              />
            </div>
          </div>
          <div className="login-input-container">
            <label htmlFor="password" className="form-label">
              Enter your password
            </label>
            <div className="password-container">
              <input
                type={`${passwordView ? "password" : "text"}`}
                placeholder="atleast 8 characters"
                className="login-input"
                value={userData.password}
                name="password"
                onChange={(e) => changeHandler(e)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="eye-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={(e) => setPasswordView(!passwordView)}
              >
                <path
                  fillRule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clipRule="evenodd"
                />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            </div>
          </div>
          <div className="login-input-container">
            <label htmlFor="password" className="form-label">
              Confirm your password
            </label>
            <div className="password-container">
              <input
                type={`${passwordView ? "password" : "text"}`}
                placeholder="atleast 8 characters"
                className="login-input"
                value={userData.confirmPassword}
                name="confirmPassword"
                onChange={(e) => changeHandler(e)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="eye-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={(e) => setPasswordView(!passwordView)}
              >
                <path
                  fillRule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clipRule="evenodd"
                />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            </div>
          </div>
          <ButtonPrimary
            style={{ width: "35rem", marginTop: "2rem" }}
            disabled={disabled}
            onClick={submitHandler}
          >
            Sign up
          </ButtonPrimary>
        </form>
      </div>
      <div className="login-page-right">
        <p className="sub-heading">Nice to see you again</p>
        <h1 className="heading">Welcome back</h1>
        <div className="image-wrapper">
          <img src={DoctorImage} alt="doctor-image" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
