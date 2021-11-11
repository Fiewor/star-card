import React, {useState} from 'react';
import '../components/Report.css';

const Report = () => {
    // const [file, setFile] = useState("")

    return (
        <section className="report">
            <div className="sidebar">
                <div className="sidebar-logo">
                    <div>
                        <h3>
                            Star Card
                        </h3>
                        <p>
                            PH Free Service
                        </p>
                    </div>
                </div> 

                <div className="side-bar-details">
                    <div>
                        <p>
                            <a href="#">
                                <i class="fas fa-columns"></i> Dashboard
                            </a>
                        </p>

                        <p className="current">
                            <a href="#">
                                <i class="fas fa-user-cog"></i> Reports
                            </a>
                        </p>
                    </div>
                </div>  

                <div className="sidebar-logout">
                    <div>
                        <p>
                            <a href="#">
                                <i class="fas fa-columns"></i> Notifications
                            </a>
                        </p>

                        <p>
                            <a href="#">
                                <i class="fas fa-sign-out-alt"></i> Logout
                            </a>
                        </p>
                    </div>
                </div>
            </div>

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
                        <p>
                            <i className="fab fa fa-facebook"></i>
                            <i className="fab fa fa-facebook"></i>
                        </p>

                        <div style={{display: 'flex'}}>
                            <p>
                                Daniel Riverdale
                            </p>
                            <div>
                                Imge
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
                                            Resources impacted
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Risk Probability (Low, Medium, High)
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                        />
                                    </div>
                                </div>

                                <div className="risk-input-group-3">
                                    <div>
                                        <label>
                                            Risk Impact(Low, Medium, High)
                                        </label>
                                        <input 
                                            type="text" 
                                            className="risk-input-text"
                                        />
                                    </div>

                                    <div>
                                        <label>
                                            Existing Montrol Measure
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