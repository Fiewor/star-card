import React from 'react';
import '../components/Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <section className="signup">
                <div className="signup-container">
                    <div className="signup-form">
                        <div className="signup-form-div">
                            <h1>Sign Up</h1>
                            <form 
                                action=""
                                className=""
                            >
                                <div>
                                    <input 
                                        type="text"
                                        placeholder="Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <input 
                                        type="text"
                                        placeholder="Organization"
                                        required
                                    />
                                </div>

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
                                    <button className="signup-btn">
                                        Sign up
                                    </button>
                                </div>

                                <p className="sign-up-link">
                                    Already have an account? <Link to="/">
                                        Login . . .
                                    </Link>  
                                </p>
                            </form>
                        </div>
                    </div>

                    <div className="signup-bg">
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

export default Signup
