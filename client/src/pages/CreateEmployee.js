import React, { useState } from 'react';
import '../components/CreateEmployee.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const CreateEmployee = () => { 
    const history = useHistory();
   
    
    const [formData, setFormData] = useState({
        employee_name : '',
        employee_email : '',
        password : ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
            headers: { 
                'Accept': 'application/json', 
                'Authorization': JSON.parse(localStorage.getItem('token'))
            }
        }

        await axios.post("https://star-card.herokuapp.com/api/create_employee", formData, config)
        .then(function (response) {
            console.log("success", formData)
            console.log(response)
            history.push("/report")
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    return (
        <>
            <section className="create">
                <div className="create-container">
                    <div className="create-form">
                        <div className="create-form-div">
                            <h1>Create an Employee</h1>
                            <form 
                                action=""
                                className=""
                            >
                                <div>
                                    <input 
                                        type="text"
                                        placeholder="Employee Name"
                                        name="employee_name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <input 
                                        type="email"
                                        placeholder="Employee Email"
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
                                        className="create-btn"
                                        onClick={handleSubmit}
                                    >
                                        Create Employee
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="create-bg">
                        <div>
                            <h3>
                                Star Card
                            </h3>
                            <p>
                                Create an employee to add to a report 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateEmployee
