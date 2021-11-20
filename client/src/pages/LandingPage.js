import React from 'react';
import '../components/LandingPage.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/powerful.svg'

const LandingPage = () => {
    return(
        <div className="landing-body">
            <Header/>
            <div className="main-container">
                <div className="hero-container"> 
                    <h1>Be a Hero to your Heroes</h1>
                    <h3>Create a workspace that enhances your teams safety and 
                        productivity with our risk analysis reporting tool
                    </h3> 
                    <div className="button-container">
                        <Link to="/signup">
                            <button className="workspace-signup">Create Workspace</button>
                        </Link>
                        <Link to="/">
                            <button className="pricing">View Pricing</button> 
                        </Link>
                    </div>
                </div>
                <div className="hero-img">
                    {/* <img src={HeroImage} alt="super black woman with cape"/> */}
                    <HeroImage/>
                </div>
            </div>

            <div className="secondary-container">
                <h2>Brands Who Trust Us</h2>
                <div>
                    <p>Join other industry giants to create a safe, data-driven workspace for your brand heroes</p>
                    <div>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LandingPage