import React from 'react';
import { Link } from 'react-router-dom';
import '../components/DashboardResult.css';
import Sidebar from '../components/Sidebar';


const DashboardResult = () => {
    return (
        <section className="db-result">
            < Sidebar />

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

                <div className="result-details">
                    <div>
                        <Link to="/dashboard">
                            View Dashboard
                        </Link>
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default DashboardResult
