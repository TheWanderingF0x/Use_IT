import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import NavBars from './components/NavBars';
import Footer from './components/Footer';
import About from './components/About';
import Main from './components/Main';
import LoginForms from './components/LoginForms';
import DatePicker from './components/DatePicker.js';
import DialogBox from './components/DialogBox.js';
import ExpansionPanel from './components/ExpansionPanel.js';

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
          <Route path='/loginforms' exact Component={LoginForms}/>
          <Route path='/datepicker' exact Component={DatePicker}/>
          <Route path='/dialogbox' exact Component={DialogBox}/>
          <Route path='/expansionpanel' exact Component={ExpansionPanel}/>
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
