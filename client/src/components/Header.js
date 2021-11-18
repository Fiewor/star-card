import React from 'react'
import './Header.css'
import WorkspaceButton from './WorkspaceButton'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header-container">
            <header>
                <Link className="logo" to="/">Starcard</Link>
                <div className="links">
                    <Link to="">Pricing</Link>
                    <Link to="">Support</Link>
                </div>
                <div className="links">
                    <WorkspaceButton/>
                    <Link to="/login">Login</Link>
                </div>
            </header>
        </div>
    )
}

export default Header