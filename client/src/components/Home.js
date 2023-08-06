import React from 'react';
import './design.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <nav className="navbar">
                {/* <div className="container">
                    <div className="navbar-brand">
                        <a href="#">Kerala HarmonicHues</a>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="#">About</a></li>
                        <li className="nav-item"><a href="#">Services</a></li>
                        <li className="nav-item"><a href="#">Contact</a></li>
                    </ul>
                </div> */}
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
                                <p>Search about the validation and verification you have to do.</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="feature">
                                <i className="fas fa-lightbulb"></i>
                                <h3>By using 27 API</h3>
                                <p>It will provide user with a lot of data.</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="feature">
                                <i className="fas fa-cog"></i>
                                <h3>Customized Settings</h3>
                                <p>Set your information preferences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>&copy; Kerala HarmonicHues</p>
                </div>
            </footer>
        </>
    );
}

export default Home;