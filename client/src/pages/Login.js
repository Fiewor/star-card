import React from 'react';
import '../components/Login.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <>
            <Header/>
            <section className="login">
                    <h2>Sign In</h2>
                    <div className="login-container">
                    <div className="login-form">
                        <div className="login-form-div">
                            <form 
                                action=""
                                className=""
                            >

                                <div>
                                    <input 
                                        type="email"
                                        placeholder="Email"
                                        name="email"
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
                                    <p className="forgot-pass">
                                        <a href="#">
                                            Forgot password ?
                                        </a>
                                    </p>
                                </div>

                                <p className="sign-up-link">
                                    You don't have an account? <Link to="/signup">
                                        Sign up here . . .
                                    </Link>  
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Login
