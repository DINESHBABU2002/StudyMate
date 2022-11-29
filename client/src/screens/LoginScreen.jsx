import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginScreen.css";

import ButtonPrimary from "../components/ButtonPrimary";
import CountriesDropdown from "../components/CountriesDropdown";
import useLogin from "../controllers/useLogin";
import DoctorImage from "../assets/undraw_doctors_hwty.svg";
import { useState } from "react";
import Loading from "./Loading";

const LoginScreen = () => {
  // const { login, error, isLoading } = useLogin();

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [passwordView, setPasswordView] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const [err, setError] = useState({
    error: false,
    message: "",
  });

  const login = async (email, password) => {
    // setLoading(true);
    const response = await fetch("/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userID: email, userPassword: password }),
    });

    const json = await response.json();
    if (!response.ok) {
      setError({ error: true, message: json.message });
      setDisabled(false);
    }

    if (response.ok) {
      navigate("/streams");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (userData.email === "" || userData.password === "") {
      setError({ error: true, message: "Please Fill All The Fields" });
      return;
    }
    setDisabled(true);
    login(userData.email, userData.password);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    if (err.error === true) {
      setError({ error: false, message: "" });
    }
  };

  return (
    <div className="login-page">
      <div className="login-page-left">
        <CountriesDropdown />

        <h1 className="left-title">Log in.</h1>
        <p className="left-content">
          Login with your data that you have entered
        </p>
        <p className="left-content left-content-last">
          during your registeration
        </p>

        {err.error && (
          <div className="input-field-error">
            <p>{err.message}</p>
          </div>
        )}
        <form onSubmit={submitHandler} className="form">
          <div className="login-input-container">
            <label htmlFor="email" className="form-label">
              Enter your email address
            </label>
            <div>
              <input
                placeholder="name@example.com"
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

          <ButtonPrimary
            style={{ width: "35rem", marginTop: "2rem" }}
            disabled={disabled}
          >
            Log in
          </ButtonPrimary>
        </form>
        <div className="forgot-password-container">
          <Link to={"/"} className="forgot-password-button">
            Forgot password?
          </Link>
        </div>

        <div className="line-break"></div>

        <div className="signup-button-container">
          <button
            className="sign-up-button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up now
          </button>
        </div>
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

export default LoginScreen;
