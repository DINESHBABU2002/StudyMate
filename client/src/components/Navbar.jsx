import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { toggleSidebar } from "../features/layouts/layoutSlice";
import CountriesDropdown from "./CountriesDropdown";
import "./Navbar.css";

const Navbar = () => {
  const isSidebarVisible = useSelector((state) => state.layouts.sidebar);
  const dispatch = useDispatch();

  return (
    <nav className={`${isSidebarVisible ? "navbar-disable" : "navbar"}`}>
      {!isSidebarVisible && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon navbar-toogle"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}

      <CountriesDropdown />
    </nav>
  );
};

export default Navbar;
