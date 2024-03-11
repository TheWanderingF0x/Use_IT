import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from './Menu.js';

const Home = () => {
    return (
        <div> 
          <div className='homelogo'>
            <h1>
              <Link to="/">
                <button>Home LOGO AREA</button>
              </Link>
            </h1>
          </div>
          
            
            <div className='home_use-it'>
                <h2>
                  <Link to="/loginforms">
                    <button className="loginforms-button">
                      Latest login forms
                    </button>
                  </Link>        
                </h2>
                <h2>
                  <Link to="/navbars">
                    <button className="navBars-button">
                    Latest navigation bars
                    </button>
                  </Link>  
                </h2>
                <h2>
                  <Link to="/main">
                    <button className="main-button">
                     Latest Main
                    </button>
                  </Link>  
                </h2>
                <h2>
                  <Link to="/footer">
                    <button className="footer-button">
                      Footers
                    </button>
                  </Link>  
                </h2>
                <h2>
                  <Link to="/datepicker">
                    <button className="datepicker-button">
                      Latest date picker
                    </button>
                  </Link>
                </h2>
                <h2>
                  <Link to="/dialogbox">
                    <button className="dialogbox-button">
                      Latest dialog box
                    </button>
                  </Link>
                </h2>
                <h2>
                  <Link to="/expansionpanel">
                    <button className="expansionpanel-button">
                      Latest expansion panel
                    </button>
                  </Link>
                </h2>
                <h2>
                  <Link to="/about">
                    <button className="about-button">
                      About
                    </button>
                  </Link>  
                </h2>
            
            
            
            
            </div>
            
            
                
                
                
                
                
            
            
        </div>
    )
}

export default Home;