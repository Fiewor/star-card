/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <div>
            <h3>Star Card</h3>
            <p></p>
          </div>
        </div>

        <div className="side-bar-details">
          <div>
            <Link to="/dashboard">
              <p style={{ marginBottom: "1rem" }}>
                <i className="fas fa-columns"></i> Dashboard
              </p>
            </Link>

            <Link to="/report">
              <p className="current">
                <i className="fas fa-user-cog"></i> Reports
              </p>
            </Link>
            <Link to="/create-employee">
              <p className="current">
                <i className="fas fa-user-cog"></i> Create Employee
              </p>
            </Link>
            <Link to="/report">
              <p className="current">
                <i className="fas fa-user-cog"></i> Create Card
              </p>
            </Link>
          </div>
        </div>

        <div className="sidebar-logout">
          <div>
            <p style={{ marginBottom: "1rem" }}>
              <a href="#">
                <i className="fas fa-columns"></i> Notifications
              </a>
            </p>

            <p>
              <a href="#">
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
