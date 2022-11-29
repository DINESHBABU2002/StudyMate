import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleSidebar } from "../features/layouts/layoutSlice";
import logo from "../assets/logo.jpg";
import avatar from "../assets/avatar.jpg";
import "./Sidebar.css";
import LoginScreen from "../screens/LoginScreen";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = (props) => {
  const isSidebarVisible = useSelector((state) => state.layouts.sidebar);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("api/v1/me");

      const json = await response.json();

      console.log("USER  --- ", json.user.username);
      setName(json.user.username);
    };

    fetchdata();
  }, []);
  const [name, setName] = useState("-");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const response = await fetch("api/v1/logout");

    if (response.ok) {
      return <LoginScreen />;
    }
  };

  // const name = useSelector((state) => state.auth);
  // console.log(name);

  return (
    <div className="sidebar-container">
      <div className={`${isSidebarVisible ? "sidebar" : "sidebar-disable"}`}>
        <div
          onClick={() => {
            dispatch(toggleSidebar());
          }}
          className={"sidebar-toggle"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="sidebar-icon sidebar-closebtn"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>

        <div className="sidebar-contents">
          <div className="sidebar-flex">
            <div className="sidebar-icons-container">
              <div
                className="sidebar-elements"
                onClick={() => {
                  navigate("/streams");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <p className="sidebar-icon-content">Home</p>
              </div>
              <div className="sidebar-elements">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p className="sidebar-icon-content">User Management</p>
              </div>
              <div
                className="sidebar-elements"
                onClick={() => {
                  navigate("/scores");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="sidebar-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>

                <p className="sidebar-icon-content">Score's</p>
              </div>
            </div>
            <div className="user-information-container">
              <div className="sidebar-elements">
                <img src={avatar} alt="user-avatar" className="user-avatar" />
                <p className="sidebar-icon-content user-name">{name}</p>
              </div>
              <div className="sidebar-elements">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="sidebar-icon-content ">Settings</p>
              </div>
              <div className="sidebar-elements" onClick={logoutHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <p className="sidebar-icon-content">Log out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sidebar-page ${!isSidebarVisible && "full-sidebar-page"}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Sidebar;
