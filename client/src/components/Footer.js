import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="social-container footer-nav">
                    <Link to="/">Starcard</Link>
                    <div className="social-links">
                        <i class="fas fa-envelope"></i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </div>
                <div className="footer-secondary-container footer-nav">
                    <p>Sitemap</p>
                    <Link to="">Pricing</Link>
                    <Link to="/signup">Sign in</Link>
                    <Link>Create Workspace</Link>
                </div>
                <div className="footer-secondary-container footer-nav">
                    <p>Discover</p>
                    <Link to="">Culture</Link>
                    <Link to="">Contribute</Link>
                    <Link to="">Community</Link>
                </div>
            </div>            
        </footer>
    )
}

export default Footer