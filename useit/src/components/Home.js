import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from './Menu.js';

const Home = () => {
    return (
        <div> 
            <Menu />
            <div className='home_use-it'>
                <h1>home</h1>

            </div>
        </div>
    )
}

export default Home;