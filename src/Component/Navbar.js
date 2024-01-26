import React, { useState, useEffect, useRef } from 'react';
import '../Styling/Navbar.css';
import cv from '../Assets/Varun_Resume.pdf'


function Navbar({ onChangeSection }) {
    const handleClick = (section) => {
        onChangeSection(section);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <p>Varun Upadhyay</p>
                <li className='li'><a href="#" onClick={() => handleClick('home')}>Home</a></li>
                <li className='li'><a href="#" onClick={() => handleClick('about')}>About</a></li>
                <li className='li'><a href="#" onClick={() => handleClick('work')}>My Work</a></li>
                <li className='download-cv'><a href={cv} download="Varun_Resume">Download Cv</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
