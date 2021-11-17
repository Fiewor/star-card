import React, {useState, useEffect} from 'react';
import '../components/Report.css';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
<<<<<<< HEAD
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
    const breakpoint = 700
=======

const Report = () => {
    // const [file, setFile] = useState("")
    const [Id, setId] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {

    })

    // axios({
    //     method: 'post',
    //     url: 'https://star-card.herokuapp.com/api/register',
    //     data: {
    //       firstName: 'shedrack',
    //       lastName: 'akintayo',
    //     }
    // }).then(response => {
    //     console.log('Date created: ', response);
    // }).catch((error) => {
    //     console.log("error: ", error);
    // })

    axios.post('https://star-card.herokuapp.com/api/create_card', {
        Id: Id,
        date: date,
        location: location
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
<<<<<<< HEAD
                            Welcome back, <span>
                                {employee}
                            </span>
=======
                            Welcome back, Daniel
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
<<<<<<< HEAD
                                            className="risk-input-text"                                            
=======
                                            className="risk-input-text"
                                            onChange={(e) => setId(e.target.value)}
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Date
                                        </label>
                                        <input 
                                            type="date"
<<<<<<< HEAD
                                            // value="2021-01-30"
                                            className="risk-input-text"                                                                                    
=======
                                            value="2021-01-30"
                                            className="risk-input-text"
                                            onChange={(e) => setDate(e.target.value)}
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label>
<<<<<<< HEAD
                                            location
                                        </label>
                                        <input 
                                            type="text"
                                            name="location"
                                            onChange={handleChange}
                                            required    
=======
                                            Time
                                        </label>
                                        <input 
                                            type="time"
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                                        />
                                    </div>

                                    <div>
                                        <label>
<<<<<<< HEAD
                                            Hazard Description
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"  
                                            name="hazard_description"
                                            onChange={handleChange}                                              
=======
                                            Location
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                            onChange={(e) => setLocation(e.target.value)}
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="risk-input-group-2">
                                    <div>
                                        <label>
<<<<<<< HEAD
                                            Resources at Risk
=======
                                            Hazard Description
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
<<<<<<< HEAD
                                            name="risked_resource"
                                            onChange={handleChange} 
                                            required   
=======
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                                        />
                                    </div>

                                    <div>
                                        <label>
<<<<<<< HEAD
                                            Time
                                        </label>
                                        <input 
                                            type="time" 
                                            className="risk-input-text"                                        
=======
                                            Resources at Risk
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Risk Probability 
                                        </label>
<<<<<<< HEAD
                                        <select
                                            name="probability"
                                            onChange={handleChange}    
                                            required
                                        >
=======
                                        <select>
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
<<<<<<< HEAD
                                        <select
                                            name="impact"
                                            onChange={handleChange}    
                                            required
                                        >
=======
                                        <select>
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
<<<<<<< HEAD
                                            name="existing_control"
                                            onChange={handleChange}    
                                            required
=======
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
<<<<<<< HEAD
                                            name="existing_prevention"
                                            onChange={handleChange}    
                                            required
=======
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Hazard Rating
                                        </label>
<<<<<<< HEAD
                                        <select
                                            name="rating"
                                            onChange={handleChange}    
                                            required
                                        >
=======
                                        <select>
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
<<<<<<< HEAD
                                            name="other_info"
                                            onChange={handleChange}    
                                            required
=======
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
<<<<<<< HEAD
                                            className="risk-input-text"                            
=======
                                            className="risk-input-text"
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
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
        </section>
    )
}

export default Report
