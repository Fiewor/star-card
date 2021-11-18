import React, {useState, useEffect} from 'react';
import '../components/Dashboard.css';
import Sidebar from '../components/Sidebar';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [organisationDetails, setOrganisationDetails] = useState("");
    const history = useHistory();
    
    const config = {
        headers: { 
            'Accept': 'application/json', 
            'Authorization': JSON.parse(localStorage.getItem('token'))
        }
    }

    useEffect(() => {
        axios.get('https://star-card.herokuapp.com/api/organization_details', config)
        .then(function (response) {
            console.log("success");
            console.log(response);
            console.log(setOrganisationDetails(response.data.data.organization));
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])

    const handleLogout = (e) => {

        localStorage.clear();
        history.push("/login")

    }

    return (
        <section className="dashboard">
            < Sidebar organisationDetails={organisationDetails} />

            <div className="main-page">
                <div className="main-page-nav">
                    <div>
                        <h3>
                            Welcome back, <span>
                                {organisationDetails}
                            </span>

                        </h3>
                        <p>
                            Enter your risk assessment report on the job you just conmpleted
                        </p>
                    </div>

                    <div className="main-page-nav-profile">
                        <Link to="/createmployee">
                            <p>Create an employee</p>
                        </Link>

                        <div style={{display: 'flex', paddingLeft: "10px" }}>
                            <p style={{paddingRight: "10px"}}>
                                {organisationDetails}
                            </p>
                            <div>
                                <button
                                    className="logout"
                                    onClick={handleLogout}
                                >                                    
                                    <i className="fas fa-sign-out-alt"></i> 
                                    <span>Logout</span>
                                </button>
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
