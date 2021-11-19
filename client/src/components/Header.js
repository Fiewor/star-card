import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header-container">
            <header>
                <p className="logo">Starcard</p>
                <div className="links first-nav-links">
                    <Link to="/">Pricing</Link>
                    <Link to="/">Support</Link>
                </div>
                <div className="links">
                    <Link to="/signup">
                        <button>Create Workspace</button>
                    </Link>
                    <Link 
                        to="/login"
                        className="nav-login"
                    >
                        Login
                    </Link>
                </div> 
            </header>
        </div>
    )
}

export default Header