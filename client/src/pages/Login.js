<<<<<<< HEAD
import React, { useState } from 'react';
import '../components/Login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => { 
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const config = {
            headers: { 
                'Accept': 'application/json', 
            }
        }

        axios.post("https://star-card.herokuapp.com/api/login", formData, config)
        .then(function (response) {
            console.log("success", formData)
            console.log(response);
            localStorage.setItem('token', JSON.stringify(response.data.access_token));
            history.push("/dashboard")
        })
        .catch(function (error) {
            console.log(error);
        });
    }

=======
import React from 'react';
import '../components/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
<<<<<<< HEAD
                                        name="email"
                                        onChange={handleChange}
=======
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                                        required
                                    />
                                </div>

                                <div>
                                    <input 
                                        type="password"
                                        placeholder="Password"
<<<<<<< HEAD
                                        name="password"
                                        onChange={handleChange}
=======
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                                        required
                                    />
                                    <p className="forgot-pass">
                                        <a href="#">
                                            Forgot password ?
                                        </a>
                                    </p>
                                </div>

                                <div>
<<<<<<< HEAD
                                    <button 
                                        className="login-btn"
                                        onClick={handleSubmit}
                                    >
=======
                                    <button className="login-btn">
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
