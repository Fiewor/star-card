import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="social-container">
                    <p>Starcard</p>
                    <div className="social-links">
                        <i class="fas fa-envelope"></i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </div>
                <div className="footer-secondary-container">
                    <p>Sitemap</p>
                    <Link to="">Pricing</Link>
                    <Link to="/signup">Sign in</Link>
                    <Link>Create Workspace</Link>
                </div>
                <div className="footer-secondary-container">
                    <p>Discover</p>
                    <Link to="">Culture</Link>
                    <Link to="">Cuisine</Link>
                    <Link to="">Community</Link>
                    <Link to="">Companionship</Link>
                </div>
            </div>
            <div/>
        </footer>
    )
}

export default Footer