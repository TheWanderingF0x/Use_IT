import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='mainMenu'>
            <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/navbars">
                    <button className="navBars-button">NavBars</button>
                </Link>
                <Link to="/loginforms">
                    <button className="loginForms-button">Login Forms</button>
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
    );
};

export default Menu;