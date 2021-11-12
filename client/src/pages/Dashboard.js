import React from 'react';
import '../components/Dashboard.css';
import Sidebar from '../components/Sidebar';
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <section className="dashboard">
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

                <div className="dashboard-details">
                    <div className="dashboard-filter">
                        <div>
                            <p style={{paddingRight: '10px'}}>
                                <i className="fab fa fa-facebook"></i> Filter
                            </p>
                            <div 
                                style={{paddingRight: '10px'}}
                                className="dashboard-filter-input"
                            >
                                <p 
                                    className="search"
                                >
                                    <i className="fas fa fa-search"></i>
                                </p>
                                <input type=""text/>
                            </div>
                            <Link                 
                                to="/"
                            >
                                View Summary
                            </Link>
                        </div>
                    </div>

                    <div className="dashboard-data">
                        <div className="dashboard-header-details">
                            <p>
                                ID
                            </p>
                            <p>
                                Assigned To
                            </p>
                            <p>
                                Report Summary
                            </p>
                            <p>
                                Time
                            </p>
                            <p>
                                Date
                            </p>
                            <p>
                                Risk Impact
                            </p>
                            <p>
                                Status
                            </p>
                            <p>
                                View Details
                            </p>
                        </div>

                        <div className="db-grid">
                            <p>
                                0001
                            </p>
                            <p>
                                Daniel Riverdale
                            </p>
                            <p>
                                Fire Hazard Report
                            </p>
                            <p>
                                17:00
                            </p>
                            <p>
                                09/21
                            </p>
                            <p>
                                High
                            </p>
                            <p>
                                <button 
                                    className="resolved-btn"
                                >
                                    Resolved
                                </button>
                            </p>
                            <p>
                                ...
                            </p>
                        </div>

                        <div className="db-grid">
                            <p>
                                0002
                            </p>
                            <p>
                                Bob Faraday
                            </p>
                            <p>
                                Equipment malfunction
                            </p>
                            <p>
                                7:00
                            </p>
                            <p>
                                08/21
                            </p>
                            <p>
                                Low
                            </p>
                            <p>
                                <button 
                                    className="resolved-btn"
                                >
                                    Pending
                                </button>
                            </p>
                            <p>
                                ...
                            </p>
                        </div>

                        <div className="db-grid">
                            <p>
                                0003
                            </p>
                            <p>
                                Angie Jones
                            </p>
                            <p>
                                Personneel Hazard
                            </p>
                            <p>
                                16:00
                            </p>
                            <p>
                                08/20
                            </p>
                            <p>
                                High
                            </p>
                            <p>
                                <button 
                                    className="resolved-btn"
                                >
                                    Resolved
                                </button>
                            </p>
                            <p>
                                ...
                            </p>
                        </div>

                        <div className="db-grid">
                            <p>
                                0001
                            </p>
                            <p>
                                Daniel Riverdale
                            </p>
                            <p>
                                Fire Hazard Report
                            </p>
                            <p>
                                17:00
                            </p>
                            <p>
                                09/21
                            </p>
                            <p>
                                High
                            </p>
                            <p>
                                <button 
                                    className="resolved-btn"
                                >
                                    Resolved
                                </button>
                            </p>
                            <p>
                                ...
                            </p>
                        </div>

                        <div className="db-grid">
                            <p>
                                0003
                            </p>
                            <p>
                                Angie Jones
                            </p>
                            <p>
                                Personneel Hazard
                            </p>
                            <p>
                                16:00
                            </p>
                            <p>
                                08/20
                            </p>
                            <p>
                                High
                            </p>
                            <p>
                                <button 
                                    className="resolved-btn"
                                >
                                    Resolved
                                </button>
                            </p>
                            <p>
                                ...
                            </p>
                        </div>

                        <div className="db-grid">
                            <p>
                                0002
                            </p>
                            <p>
                                Bob Faraday
                            </p>
                            <p>
                                Equipment malfunction
                            </p>
                            <p>
                                7:00
                            </p>
                            <p>
                                08/21
                            </p>
                            <p>
                                Low
                            </p>
                            <p>
                                <button 
                                    className="resolved-btn"
                                >
                                    Pending
                                </button>
                            </p>
                            <p>
                                ...
                            </p>
                        </div>

                        <div className="db-grid">
                            <p>
                                0002
                            </p>
                            <p>
                                Bob Faraday
                            </p>
                            <p>
                                Equipment malfunction
                            </p>
                            <p>
                                7:00
                            </p>
                            <p>
                                08/21
                            </p>
                            <p>
                                Low
                            </p>
                            <p>
                                <button 
                                    className="resolved-btn"
                                >
                                    Pending
                                </button>
                            </p>
                            <p>
                                ...
                            </p>
                        </div>

                    </div>
                </div>
            </div>    
        </section>
    )
}

export default Dashboard
