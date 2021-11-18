import React from 'react';
import '../components/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <section className="login">
                <div className="login-container">
                    <div className="login-form">
                        <div className="login-form-div">
                            <h1>Welcome</h1>
                            <form 
                                action=""
                                className=""
                            >
                                <div>
                                    <input 
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div>
                                    <input 
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <p className="forgot-pass">
                                        <a href="#">
                                            Forgot password ?
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <button className="login-btn">
                                        Sign In
                                    </button>
                                </div>

                                <p className="sign-up-link">
                                    You don't have an account? <Link to="/signup">
                                        Sign up here . . .
                                    </Link>  
                                </p>
                            </form>
                        </div>
                    </div>

                    <div className="login-bg">
                        <div>
                            <h3>
                                Star Card
                            </h3>
                            <p>
                                Secure your risk assesment data entry
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
