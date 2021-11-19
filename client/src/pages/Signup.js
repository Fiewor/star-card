/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/organizationActions";
import "../components/Signup.css";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkspaceButton from "../components/WorkspaceButton"
//name, email, phone, organization, industry, password, password_confirmation

const Signup = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [industry, setIndustry] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const organizationRegister = useSelector(
    (state) => state.organizationRegister
  );
  const { loading, error, organizationInfo } = organizationRegister;

  useEffect(() => {
    if (organizationInfo) {
      window.location = "/login";
    }
  }, [history, organizationInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      setMessage(error);
    } else {
      dispatch(
        register(
          name,
          email,
          phone,
          organization,
          industry,
          password,
          password_confirmation
        )
      );
    }
  };
  
  return (
    <>
      <Header/>
      <section className="signup">
      <h1>Create Workspace</h1>
                <div className="signup-container">
                    <div className="signup-form">
                        <div className="signup-form-div">
                          <h3>Select Industry</h3>
                          <div className="industry-container">
                              <button className="industry-type">Health</button>
                              <button className="industry-type">Education</button>
                              <button className="industry-type">First Response</button>
                              <button className="industry-type">Military</button>
                              <button className="industry-type">Construction</button>
                              <button className="industry-type">Policing</button>
                              <button className="industry-type">Chain Store</button>
                              <button className="industry-type">IT</button>
                          </div>
                          <h3>Work Information</h3>
                          {message && <Message variant="danger">{message}</Message>}
                          {error && <Message variant="danger">{error}</Message>}
                          {loading && <Loader />}
                          <form onSubmit={submitHandler}>
                            <div>
                              <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>

                            <div>
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>

                            <div>
                              <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>

                            <div>
                              <input
                                type="text"
                                placeholder="Organization Name"
                                name="organization"
                                required
                                value={organization}
                                onChange={(e) => setOrganization(e.target.value)}
                              />
                            </div>

                            <div>
                              <input
                                type="text"
                                placeholder="Industry"
                                name="industry"
                                required
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
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
                              <input
                                type="password"
                                placeholder="Confirm Password"
                                name="password_confirmation"
                                required
                                value={password_confirmation}
                                onChange={(e) => setPassword_confirmation(e.target.value)}
                              />
                              <p className="forgot-pass">
                                <a href="#">Forgot password ?</a>
                              </p>
                            </div>

                            <div>
                              <WorkspaceButton/>
                              {/* <button
                                className="signup-btn"
                                type="submit"
                                style={{ cursor: "pointer" }}
                              >
                                Sign up
                              </button> */}
                            </div>

                            <p className="sign-up-link">
                              Already have an account? <Link to="/login">Login . . .</Link>
                            </p>
                          </form>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Signup;
