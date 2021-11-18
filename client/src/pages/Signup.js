import React, { useEffect, useState } from 'react';
import '../components/Signup.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import WorkspaceButton from '../components/WorkspaceButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

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
        console.log(formData);
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
        })
        .catch(function (error) {
            console.log(error);
        });
    }


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
                                <div className="industry-type">Health</div>
                                <div className="industry-type">Education</div>
                                <div className="industry-type">First Response</div>
                                <div className="industry-type">Military</div>
                                <div className="industry-type">Construction</div>
                                <div className="industry-type">Policing</div>
                                <div className="industry-type">Chain Store</div>
                                <div className="industry-type">IT</div>
                            </div>
                            <h3>Work Information</h3>
                            <form 
                                action=""
                                className=""
                            >
                                <div>
                                    <input 
                                        type="text"
                                        placeholder="Business Name"
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
                                    <WorkspaceButton/>
                                </div>

                                <p className="sign-up-link">
                                    Already have an account? <Link to="/login">
                                        Login . . .
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

export default Signup
