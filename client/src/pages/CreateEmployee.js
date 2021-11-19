/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployees } from "../actions/organizationActions";
import "../components/Signup.css";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import "../components/CreateEmployee.css";

const CreateEmployee = ({history}) => {
  const [employee_name, setEmployee_name] = useState("");
  const [employee_email, setEmployee_email] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const createEmployee = useSelector((state) => state.createEmployee);
  const { loading, error, employeeInfo } = createEmployee;

  const organizationLogin = useSelector((state) => state.organizationLogin);
  const { organizationInfo } = organizationLogin;

  useEffect(() => {
    if (!organizationInfo) {
      history.push("/login");
    } else {
      // console.log(OrganizationInfo);
    }
  }, [dispatch, history, organizationInfo]);
  
  useEffect(() => {
    if (employeeInfo) {
      //redirect to employee list page
      // window.location = "/dashboard";
      alert("Employee Created Successfully");
    }
  }, [employeeInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
      dispatch(
        createEmployees(
          employee_name,
          employee_email,
          password,
        )
      );
    
  };
  
  return (
    <>
      <section className="create">
        <div className="create-container">
          <div className="create-form">
            <div className="create-form-div">
              <h1>Create an Employee</h1>
              {message && <Message variant="danger">{message}</Message>}
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <form action="" className="" onSubmit={submitHandler}>
                <div>
                  <input
                    type="text"
                    placeholder="Employee Name"
                    name="employee_name"
                    required
                    value={employee_name}
                    onChange={(e) => setEmployee_name(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Employee Email"
                    name="employee_email"
                    required
                    value={employee_email}
                    onChange={(e) => setEmployee_email(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <button className="create-btn" type="submit">Create Employee</button>
                </div>
              </form>
            </div>
          </div>

          <div className="create-bg">
            <div>
              <h3>Star Card</h3>
              <p>Create an employee to add to a report</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateEmployee;
