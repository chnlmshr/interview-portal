import React from "react";

export const Navbar = ({ homeActive, scheduleActive }) => {
  return (
    <div className="mx-5 d-flex justify-content-between bg-light px-4 py-2 rounded border-bottom">
      <a className="text-reset navbar-brand" href="/">
        Interview Creation Portal
      </a>
      <div className="d-flex">
        <a
          className={`nav-link ${homeActive ? "text-black" : "text-secondary"}`}
          href="/"
        >
          Home
        </a>
        <a
          className={`nav-link ${
            scheduleActive ? "text-black" : "text-secondary"
          }`}
          href="/schedule"
        >
          Schedule
        </a>
      </div>
    </div>
  );
};
