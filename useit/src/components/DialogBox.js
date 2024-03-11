import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const DialogBox = () => {
    return (
        <div>
            <Menu />
            <div className='dialogbox_use-it'>
                <h1>Dialog Box ideas</h1>
            </div>
        </div>
    )
}

export default DialogBox;