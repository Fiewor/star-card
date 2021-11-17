import React, { useState } from 'react';
import '../components/EmployeeLogin.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const EmployeeLogin = () => { 
    const history = useHistory();

    const [formData, setFormData] = useState({
        employee_email: "",
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

        axios.post("https://star-card.herokuapp.com/api/employee_login", formData, config)
        .then(function (response) {
            console.log("success employee Login", formData)
            console.log(response);
            // localStorage.setItem('token', JSON.stringify(response.data.access_token));
            history.push("/report")
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <section className="employLogin">
                <div className="employLogin-container">
                    <div className="employLogin-form">
                        <div className="employLogin-form-div">
                            <h1>Employee Login</h1>
                            <form 
                                action=""
                                className=""
                            >
                                <div>
                                    <input 
                                        type="email"
                                        placeholder="Email"
                                        name="employee_email"
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
                                    <button 
                                        className="employLogin-btn"
                                        onClick={handleSubmit}
                                    >
                                        Sign In
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="employeeLogin-bg">
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

export default EmployeeLogin
