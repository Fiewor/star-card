import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <>
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
                        <a 
                            href="#"
                        >
                            <p style={{marginBottom: "1rem"}}>
                                <i className="fas fa-columns"></i> Dashboard
                            </p>
                        </a>

                        <a href="#">
                            <p className="current">            
                                <i className="fas fa-user-cog"></i> Reports                            
                            </p>
                        </a>
                    </div>
                </div>  

                <div className="sidebar-logout">
                    <div>
                        <p style= {{marginBottom: "1rem"}}>
                            <a href="#">
                                <i className="fas fa-columns"></i> Notifications
                            </a>
                        </p>

                        <p>
                            <a href="#">
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
