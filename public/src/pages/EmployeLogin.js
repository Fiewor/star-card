/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeLogins } from "../actions/employeeActions";
import Message from "../components/Message";
import "../components/Login.css";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const EmployeeLogin = () => {
  const [employee_email, setEmployeEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const employeeLogin = useSelector((state) => state.employeeLogin);
  const { loading, error, success, employeeInfo } = employeeLogin;

  useEffect(() => {
    if (employeeInfo) {
      window.location = "/report";
    }
  }, [employeeInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(employeeLogins(employee_email, password));
  };
  return (
    <>
      <section className="login">
        <div className="login-container">
          <div className="login-form">
            <div className="login-form-div">
              <h1>Welcome</h1>
              {success && <Message variant="success">{success}</Message>}
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <form action="" className="" onSubmit={submitHandler}>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={employee_email}
                    onChange={(e) => setEmployeEmail(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="forgot-pass">
                    <a href="#">Forgot password ?</a>
                  </p>
                </div>

                <div>
                  <button className="login-btn" type="submit">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="login-bg">
            <div>
              <h3>Star Card</h3>
              <p>Secure your risk assesment data entry</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeLogin;
