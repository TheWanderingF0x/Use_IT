import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='mainMenu'>
            <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/NavBars">
                    <button className="NavBars-button">NavBars</button>
                </Link>
                <Link to="/main">
                    <button className="main-button">Main</button>
                </Link>
                <Link to="/footer">
                    <button className="footer-button">Footers</button>
                </Link>
                <Link to="/about">
                    <button className="about-button">About</button>
                </Link>
            </div>
            <div className='footer_use-it'>
                <h1>Footer ideas</h1>

            </div>
        </div>
    )
}

export default Footer;