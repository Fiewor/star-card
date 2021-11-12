import React, {useState, useEffect} from 'react';
import '../components/Report.css';
import Sidebar from '../components/Sidebar';

const Report = () => {
    // const [file, setFile] = useState("")
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 700
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

                        <div style={{display: 'flex', paddingLeft: "10px" }}>
                            <p style={{paddingRight: "10px"}}>
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
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Date
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Time
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Location
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
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
                                            <option>Select a risk impact</option>
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
                                            Hazard Rating (Low, Medium, High)
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                        />
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
                                    <button>
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
