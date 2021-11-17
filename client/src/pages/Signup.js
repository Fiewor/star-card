import React, { useEffect, useState } from 'react';
import '../components/Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
<<<<<<< HEAD
import { useHistory } from 'react-router';

const Signup = () => {
    const history = useHistory();
=======

const Signup = () => {
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        industry: '',
        password: '',
        password_confirmation: '',
    });    

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
<<<<<<< HEAD
=======
        console.log(formData);
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
        e.preventDefault();

        const config = {
            headers: { 
                'Accept': 'application/json', 
            }
        }

        axios.post("https://star-card.herokuapp.com/api/register", formData, config)
        .then(function (response) {
            
            console.log("success", formData)
            console.log(response)
<<<<<<< HEAD
            history.push("/login")
=======
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
        })
        .catch(function (error) {
            console.log(error);
        });
    }


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
                                        name="name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <input 
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <input 
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <input 
                                        type="text"
                                        placeholder="Organization Name"
                                        name="organization"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <input 
                                        type="text"
                                        placeholder="Industry"
                                        name="industry"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                

                                <div>
                                    <input 
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <input 
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="password_confirmation"
                                        onChange={handleChange}
                                        required
                                    />
                                    <p className="forgot-pass">
                                        <a href="#">
                                            Forgot password ?
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <button 
                                        className="signup-btn"
                                        onClick={handleSubmit}
                                    >
                                        Sign up
                                    </button>
                                </div>

                                <p className="sign-up-link">
                                    Already have an account? <Link to="/login">
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
                                Keep heros safe and more productive by giving them a web-based platform to report hazards and get real-time prioritized response
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
