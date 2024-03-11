import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const DatePicker = () => {
    return (
        <div>
            <Menu />
            <div className='datepicker_use-it'>
                <h1>Date picker ideas</h1>
            </div>
        </div>
    )
}

export default DatePicker;