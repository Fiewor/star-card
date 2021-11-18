import React, {useState, useEffect} from 'react';
import '../components/Report.css';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

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
                            Welcome back, Daniel
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
                                            onChange={(e) => setId(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Date
                                        </label>
                                        <input 
                                            type="date"
                                            value="2021-01-30"
                                            className="risk-input-text"
                                            onChange={(e) => setDate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Time
                                        </label>
                                        <input 
                                            type="time"
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Location
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                            onChange={(e) => setLocation(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="risk-input-group-2">
                                    <div>
                                        <label>
                                            Hazard Description
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Resources at Risk
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Risk Probability 
                                        </label>
                                        <select>
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
                                        <select>
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
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Hazard Rating
                                        </label>
                                        <select>
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
