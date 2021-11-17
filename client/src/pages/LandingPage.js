import React from 'react'
import '../components/LandingPage.css'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

const LandingPage = () => {
    return(
        <div className="landing-body">
            <Header/>
            <div className="main-container">
                <div className="hero-container">
                    <h1>Be a Hero to your Heroes</h1>
<<<<<<< HEAD
                    <h4>Create a workspace that enhances your teams safety and 
                        productivity with our risk analysis reporting tool
                    </h4>
=======
                    <h3>Create a workspace that enhances your teams safety and 
                        productivity with our risk analysis reporting tool
                    </h3>
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
                    <div className="button-container">
                        <button>Create Workspace</button>
                        <button>View Pricing</button>
                    </div>
                </div>
                <img></img>
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