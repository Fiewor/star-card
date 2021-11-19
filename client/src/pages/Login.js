/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/organizationActions";
import Message from "../components/Message";
import "../components/Login.css";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch(); 

  const organizationLogin = useSelector((state) => state.organizationLogin);
  const { loading, error, success, organizationInfo } = organizationLogin;

  useEffect(() => {
    if (organizationInfo) {
      history.push("/dashboard")
    }
  }, [ organizationInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    history.push("/dashboard")
  };
  return (
    <>
    <Header/>
      <section className="login">
        <div className="login-container">
          <div className="login-form">
            <div className="login-form-div">
              <h1>Welcome</h1>
              <p style={{marginBottom: '1.1rem', fontSize: '14px'}}>
                Login to Star Card to add a risk assesment form
              </p>
              {success && <Message variant="success">{success}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}
              <form action="" className="" onSubmit={submitHandler}>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  <button className="login-btn" type="submit">Sign In</button>
                </div>

                <p className="sign-up-link">
                  You don't have an account?{" "}
                  <Link to="/signup">Sign up here . . .</Link>
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

export default Login;
