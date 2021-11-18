import React, {useState, useEffect} from 'react';
import '../components/Report.css';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Report = () => {
    const [employee, setEmployee] = useState("");
    const history = useHistory();

    useEffect(() => {
        const config = {
            headers: { 
                'Accept': 'application/json', 
                'Authorization': JSON.parse(localStorage.getItem('token'))
            }
        }
        
        axios.get('https://star-card.herokuapp.com/api/organization_details', config)
        .then(function (response) {
            console.log("success");
            console.log(response);
            console.log(setEmployee(response.data.data.organization));
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])

    const handleLogOut = () => {
        // localStorage.clear();
        history.push("/employeelogin")
    }

    const [formData, setFormData] = useState({
        location: '',
        hazard_description: '',
        risked_resource: '',
        probability: '',
        impact: '',
        existing_control: '',
        existing_prevention: '',
        rating: '',
        other_info: ''
    }); 

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const config = {
            headers: { 
                'Accept': 'application/json', 
                'Authorization': JSON.parse(localStorage.getItem('token'))
            }
        }

        axios.post("https://star-card.herokuapp.com/api/create_card", formData, config)
        .then(function (response) {
            
            console.log("success", formData)
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => {
        window.removeEventListener("resize", handleWindowResize)
        }
    }, [])

    return (
        <section className="report">
            {(width > breakpoint) && < Sidebar />}

            <div className="main-page">
                <div className="main-page-nav">
                    <div>
                        <h3>
                            Welcome back, <span>
                                {employee}
                            </span>
                            
                        </h3>
                        <p>
                            Enter your risk assessment report on the job you just conmpleted
                        </p>
                    </div>

                    <div className="main-page-nav-profile">
                        <a href="#">
                            <i className="fas fa-search"></i>
                            <i className="far fa-bell"></i>
                        </a>

                        <div className="profile-user">
                            <p>
                                {employee}
                            </p>
                            <div>
                                <button
                                    onClick={handleLogOut}
                                    className="logout"
                                >                                    
                                    <i className="fas fa-sign-out-alt"></i> 
                                    <span>
                                        Logout    
                                    </span>                                   
                                </button>
                            <p>    
                                Daniel Riverdale
                            </p>
                            <div>
                                <p>
                                    <a 
                                        href="#"
                                        className="logout"
                                    >
                                        <i className="fas fa-sign-out-alt"></i> Logout
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="risk-form">
                    <div className="risk-form-div">
                        <div className="risk-form-title">
                            <h3>Risk Assessment</h3>
                            <p>Fill the form with all relevant information on the just completed job</p>
                        </div>

                        <div className="risk-form-input">
                            <form>
                                <div className="risk-input-group-1">
                                    <div>
                                        <label>
                                            Case ID
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"                                                                                    
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Date
                                        </label>
                                        <input 
                                            type="date"                                            
                                            className="risk-input-text"                                                                                    
                                            value="2021-01-30"
                                            className="risk-input-text"                                            
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            location
                                        </label>
                                        <input 
                                            type="text"
                                            name="location"
                                            onChange={handleChange}
                                            required    
                                        />                                                        
                                    </div>

                                    <div>
                                        <label>
                                            Hazard Description
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"  
                                            name="hazard_description"
                                            onChange={handleChange}                                              
                                            Location                                        
                                        />
                                    </div>
                                </div>

                                <div className="risk-input-group-2">
                                    <div>
                                        <label>
                                            Resources at Risk                                            
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                            name="risked_resource"
                                            onChange={handleChange} 
                                            required   
                                        />
                                    </div>                            

                                    <div>
                                        <label>
                                            Risk Probability 
                                        </label>
                                        <select
                                            name="probability"
                                            onChange={handleChange}    
                                            required
                                        >
                                            <option>Select a risk probability</option>
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="risk-input-group-3">
                                    <div>
                                        <label>
                                            Risk Impact
                                        </label>
                                        <select
                                            name="impact"
                                            onChange={handleChange}    
                                            required
                                        >
                                            <option>Select the level of the risk impact</option>
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label>
                                            Existing Control Measure
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                            name="existing_control"
                                            onChange={handleChange}    
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="risk-input-group-4">
                                    <div>
                                        <label>
                                            Existing Measures for Prevention and Mitigation
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                            name="existing_prevention"
                                            onChange={handleChange}    
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Hazard Rating
                                        </label>
                                        <select
                                            name="rating"
                                            onChange={handleChange}    
                                            required
                                        >
                                            <option>Select the hazard rating</option>
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="risk-input-group-5">

                                    <div>
                                        <label>
                                            Additional Information
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                            name="other_info"
                                            onChange={handleChange}    
                                            required
                                        />
                                    </div>
                                    
                                </div>

                                <div className="risk-input-group-6">

                                    <div>
                                        <label>
                                            Upload Media
                                            <span style={{color: "blue"}}>
                                                (optional)
                                            </span>
                                        </label>
                                        <input 
                                            type="file" 
                                            className="risk-input-text"                            
                                            className="risk-input-text"
                                        />
                                    </div>
                                    
                                </div>

                                <div className="risk-form-btn">
                                    <button
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Report
