import React from 'react'
import './Header.css'
import WorkspaceButton from './WorkspaceButton'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header-container">
            <header>
                <Link to="/" className="logo">Starcard</Link>
                <div className="links first-nav-links">
                    <Link to="/">Pricing</Link>
                    <Link to="/">Support</Link>
                </div>
                <div className="links">
                    <Link to="/signup">
                        <WorkspaceButton/>
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