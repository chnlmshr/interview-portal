import React from "react";
import { Link } from "react-router-dom";
export const Navbar = ({ homeActive, scheduleActive }) => {
  return (
    <div className="fixed-top d-flex justify-content-between bg-light px-4 py-2 rounded border-bottom">
      <a className="text-reset navbar-brand" href="/">
        Interview Creation Portal
      </a>
      <div className="d-flex">
        <Link
          className={`nav-link ${homeActive ? "text-black" : "text-secondary"}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`nav-link ${
            scheduleActive ? "text-black" : "text-secondary"
          }`}
          to="/schedule"
        >
          {" "}
          Schedule
        </Link>
      </div>
    </div>
  );
};
