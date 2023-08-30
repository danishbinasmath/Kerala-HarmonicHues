import React from 'react';
import './css/design.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <nav className="navbar">
                 <div className="container">
                    
                </div> 
            </nav>

            <section className="hero">
                <div className="container">
                    <h1>Welcome to Kerala HarmonicHues</h1>
                    <h2>ഹാർമോണിക്ക്‌ഹ്യൂസിലേക്ക് സ്വാഗതം</h2>
                    <p>Our platform is build to make the daily life of the people kerala easy.</p>
                    <Link to="/Cards" className="startButton">Get Started</Link>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2>Our Features</h2>
                    <div className="row">
                        <div className="">
                            <div className="feature">
                                <i className="fas fa-home"></i>
                                <h3>Providing with the latest information of Kerala</h3>
                                <p>Get the Kerala News, Kerala Fuel Prices, Kerala Post Office </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="feature">
                                <i className="fas fa-lightbulb"></i>
                                <h3>By using 4 API</h3>
                                <p>The data of latest Petrol, Diesal and LPG prices, search the details of Post Office by searching Postal PIN Code or Post Office Branch Name of Kerala, the latest Kerala News and Quote Api.</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="feature">
                                <i className="fas fa-cog"></i>
                                <h3>Kerala Community Page</h3>
                                <p>A page where people can share about events of kerala with image and description, People can make friends and also like the post and also visit the pages of Kerala Community Poeple.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>&copy; Muhammad Danish (Computer Science Student)</p>
                </div>
            </footer>
        </>
    );
}

export default Home;