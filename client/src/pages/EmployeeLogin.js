import React, { useState } from "react";
import "../components/EmployeeLogin.css";

const EmployeeLogin = () => {
  return (
    <>
      <section className="employLogin">
        <div className="employLogin-container">
          <div className="employLogin-form">
            <div className="employLogin-form-div">
              <h1>Employee Login</h1>
              <form className="">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="employee_email"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>

                <div>
                  <button className="employLogin-btn">Sign In</button>
                </div>
              </form>
            </div>
          </div>

          <div className="employeeLogin-bg">
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
