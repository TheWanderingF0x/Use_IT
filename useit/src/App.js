import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import NavBars from './components/NavBars';
import Footer from './components/Footer';
import About from './components/About';
import Main from './components/Main';

const App = () => {
  return (
    <div className='homepage'>
      <Router>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/navbars' exact Component={NavBars}/>
          <Route path='/main' exact Component={Main}/>
          <Route path='/footer' exact Component={Footer}/>
          <Route path='/about' exact Component={About}/>
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
